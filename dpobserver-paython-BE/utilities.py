# import needed packages 

import json
import csv
import numpy as np
import os 
import pandas as pd 
import re
from sklearn.model_selection import train_test_split
import joblib

# Define a regular expression pattern to match alphabetic characters
pattern = re.compile('[a-zA-Z]')

def calc_scenarios_means(dir_path):
    """
    Calculate the means of features from JSON files in a directory.

    Args:
        dir_path (str): The directory path containing JSON files.

    Returns:
        list: A list of means for each feature from the JSON files.
    """
    means = []

    # Loop through all files in the directory
    for file_name in os.listdir(dir_path):
        # Check if the file is a JSON file
        if file_name.endswith(".json"):
            # Read the contents of the file
            with open(os.path.join(dir_path, file_name), "r") as json_file:
                # Read the JSON content from the file
                json_content = json_file.read()

                # Remove alphabetic characters from the JSON content
                cleaned_json_content = pattern.sub('', json_content)

                # Load the cleaned JSON content into a Python dictionary
                scenario = json.loads(cleaned_json_content)

                # Calculate the mean for each feature
                means.append(np.mean(scenario, axis=0))

    return means

def save_array_to_csv(data_arrays, csv_file_path, class_value):
    """
    Save data arrays to a CSV file, including a class value.

    Args:
        data_arrays (list): A list of data arrays.
        csv_file_path (str): The path to the CSV file for saving data.
        class_value (str): The class value to be added to each row.

    Returns:
        None
    """
    try:
        # Open the CSV file for writing
        with open(csv_file_path, "w", newline="") as csv_file:
            csv_writer = csv.writer(csv_file)

            # Write the header row
            header = ["dev_mean", "speed_mean", "break_mean", "Class"]
            csv_writer.writerow(header)

            for array in data_arrays:
                # Create a row with data and class value
                data_row = list(array)  # Convert the array to a list
                data_row.append(class_value)

                # Write the data row to the CSV file
                csv_writer.writerow(data_row)

        print(f"Data saved to {csv_file_path} with class value {class_value}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")




# In[]
# Important Note: Just run it if there is new data being added

# call function twice to clac means
# right_data_mat = calc_scenarios_means("data/right-data")
# wrong_data_mat = calc_scenarios_means("data/wrong-data")

# # save csv files 
# save_array_to_csv(right_data_mat, "right_scenarios.csv",0)
# save_array_to_csv(wrong_data_mat, "wrong_scenarios.csv",1)

# # read csv files 
# right_df = pd.read_csv("right_scenarios.csv")
# wrong_df = pd.read_csv("wrong_scenarios.csv")

# # merge the two datasets based on a common column
# merged_df = pd.concat([right_df, wrong_df], axis=0)  # Export the dataframe as a CSV file
# merged_df.to_csv('all_scenarios.csv', index=False)


#In[]
# ------------------------------------------- split data section ------------------------------------------

# read csv file 
df = pd.read_csv('all_scenarios.csv')

# split the data
X = df.drop(columns=['Class']) 
y = df['Class']


# Split the dataset into training and testing subsets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#In[]:
# ------------------------------------------clustering----------------------------------------------- 
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score

# Apply K-Means clustering (or any other clustering algorithm)
n_clusters = 2  # Number of clusters
kmeans = KMeans(n_clusters=n_clusters)
cluster_assignments = kmeans.fit_predict(X)

# Calculate the Adjusted Rand Index (ARI) to assess clustering quality
ari = adjusted_rand_score(y, cluster_assignments)

print(f"Adjusted Rand Index (ARI): {ari}")

# ------------------------------------ plot section -----------------------------------------

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # Import 3D plotting tools

def datasetPlot(directory):
    # Read the data from the CSV file
    data = pd.read_csv(directory)

    # Assuming you have three columns: deviation, speed, and depth
    dev = data.dev_mean
    spd = data.speed_mean
    brk = data.break_mean
    classes = data.Class  # Assuming 'Class' is the name of the column

    
    # Create a 3D scatter plot
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    # Define colors for each class
    colors = {1: 'r', 0: 'g'}  # Adjust class names and colors as needed

    # Plot data points based on class
    for class_name, color in colors.items():
        indices = classes == class_name
        ax.scatter(dev[indices], spd[indices], brk[indices], c=color, marker='o', label=class_name)


    # Add labels and title
    ax.set_xlabel('Deviation')
    ax.set_ylabel('Speed')
    ax.set_zlabel('Break')
    ax.set_title('3D Datapoints')

    # Display the plot
    plt.show()

# Call the function for different data files
datasetPlot('right_scenarios.csv')
datasetPlot('wrong_scenarios.csv')
datasetPlot('all_scenarios.csv')



#In[]:
# ------------------------------------------------ KNN Section --------------------------------------------
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix


k = 5  # Number of neighbors (adjust as needed)
knn_classifier = KNeighborsClassifier(n_neighbors=k)

# fit the data
knn_classifier.fit(X_train, y_train)

# use the model
y_pred = knn_classifier.predict(X_test)

# get the accurcy 
accuracy = accuracy_score(y_test, y_pred)

print(f"KNN Accuracy: {accuracy} \n")


# Save the trained model as a .pkl file
model_filename = 'KNN_model.pkl'
joblib.dump(knn_classifier, model_filename)

#In[]
#----------------------------------------------------NN section------------------------------------------------

#nural network
from sklearn.neural_network import MLPClassifier

#logistic
NN = MLPClassifier(activation ='logistic', alpha=0.0001,hidden_layer_sizes=(20,23),max_iter=500)
NN.fit(X_train, y_train)
x_test_prediction = NN.predict(X_test)
result = accuracy_score(x_test_prediction,y_test)
print('Model neural network with Logistic activation accuracy : ', result)
print("\n")


# Save the trained model as a .pkl file
model_filename = 'NN_model.pkl'
joblib.dump(NN, model_filename)


#In[]
#----------------------------------------------------Logistic section------------------------------------------------

# Model by logistic
from sklearn.linear_model import LogisticRegression

lr = LogisticRegression()
lr.fit(X_train, y_train)
X_test_prediction = lr.predict(X_test)
testing_data_accuracy = accuracy_score(X_test_prediction, y_test)
print('Acuracy on Testing Data using logistic regression:: ', testing_data_accuracy)
print("\n")


# Save the trained model as a .pkl file
model_filename = 'LR_model.pkl'
joblib.dump(lr, model_filename)

#In[]
#----------------------------------------------------SVM section------------------------------------------------

#svm
from sklearn.svm import SVC
#linear
svm = SVC(kernel='linear')
svm.fit(X_train, y_train)
y_pred = svm.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print('Model SVM using linear kernal accuracy is: ', accuracy)
print("\n")

# Save the trained model as a .pkl file
model_filename = 'svm_model.pkl'
joblib.dump(svm, model_filename)

#In[]
#----------------------------------------------------NB section------------------------------------------------

#naive bayes
from sklearn.naive_bayes import GaussianNB

nb = GaussianNB()
nb.fit(X_train, y_train)
y_pred  =  nb.predict(X_test)
print("Accuracy using naive Bayes is:",accuracy_score(y_test, y_pred))

# Save the trained model as a .pkl file
model_filename = 'NB_model.pkl'
joblib.dump(nb, model_filename)


