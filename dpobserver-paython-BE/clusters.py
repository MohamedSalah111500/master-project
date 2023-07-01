# -*- coding: utf-8 -*-
"""
Created on Sun Feb 19 11:38:14 2023

@author: Osama Ala'a
"""
import json , os
import pandas as pd 
import matplotlib.pyplot as plt
import sklearn.preprocessing as prePossess


# needed data structures
right_deviation = list()
right_speed = list()



def read_dir_files (dir_path,data_cat):
    
    # needed data structures
    deviation_list = []
    speed_list = []

    # Loop through all files in the directory
    for file_name in os.listdir(dir_path):
        # Check if the file is a JSON file
        if file_name.endswith(".json"):
            # Read the contents of the file
            with open(os.path.join(dir_path, file_name), "r") as json_file:
                data = json.load(json_file)
                for row in data:
                    deviation_list.append((float(row[0])))
                    speed_list.append(float(row[1]))

    # Create a dictionary with the data
    data = {
        'deviation': deviation_list,
        'speed': speed_list,
        'class': [data_cat]*len(speed_list)
    }

    # Create a dataframe from the dictionary
    df = pd.DataFrame(data)

    if data_cat: 
        # Export the dataframe as a CSV file
        df.to_csv('right_data.csv', index=False)
    else:
        # Export the dataframe as a CSV file
        df.to_csv('wrong_data.csv', index=False)



# call function twice
read_dir_files("dpobserver-data/right data",1)
read_dir_files("dpobserver-data/wrong data",0)


# merge 2 datasets
# read the two datasets
df1 = pd.read_csv('right_data.csv')



df2 = pd.read_csv('wrong_data.csv')

# print(df2.shape)

# right_dev_max  = max(df1['deviation'])
# right_dev_min  = min(df1['deviation'])
# right_speed_max = max(df1['speed'])

# df2 = df2[(df2['deviation'] > right_dev_max) | (df2['deviation'] < right_dev_min) | (df2['speed'] > right_speed_max)]
# print(df2.shape)

#Export the dataframe as a CSV file
df2.to_csv('filtered_wrong_data.csv', index=False)

# merge the two datasets based on a common column
merged_df = pd.concat([df1, df2], axis=0)

# Export the dataframe as a CSV file
merged_df.to_csv('all_data.csv', index=False)


def datasetPlot(directory):
        # 3. read all data file file 
    data = pd.read_csv(directory)
    # Assuming you have a DataFrame or arrays containing the data
    dev = data.deviation   # x-values
    spd = data.speed       # y-values

    print(data.shape)

    # Plot the datapoints
    plt.scatter(dev, spd)

    # Add labels and title
    plt.xlabel('Deviation')
    plt.ylabel('speed')
    plt.title('Datapoints')

    # Display the plot
    plt.show()

#call function 

datasetPlot('right_data.csv')
datasetPlot('wrong_data.csv')
datasetPlot('all_data.csv')


#In[]

# clustering time

from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score

all_data = pd.read_csv('all_data.csv')
features = all_data[['deviation','speed']]
# Perform K-means clustering with 2 clusters
kmeans = KMeans(n_clusters = 2)

# model start train here =>
kmeans.fit(features)

def clustring_result(data):
    return 0 if sum(kmeans.predict(data))>=(len(data)/2) else 1

# Get the cluster labels assigned to each data point
labels = kmeans.labels_

# Separate the data points into clusters based on the labels
cluster1 = features[labels == 1]
cluster2 = features[labels == 0]

# Plot the clusters
plt.scatter(cluster1['deviation'], cluster1['speed'], color='green', label='Cluster 1')
plt.scatter(cluster2['deviation'], cluster2['speed'], color='red', label='Cluster 2')

# Add labels and title
plt.xlabel('Deviation')
plt.ylabel('Speed')
plt.title('Clustering')

# Add legend
plt.legend()

# Display the plot
plt.show()



#In[]

# now it's time to keep the datapoints which are inside the box 

# Calculate the first and third quartiles for each feature
q1_x = all_data['deviation'].quantile(0.25)
q3_x = all_data['deviation'].quantile(0.75)
q1_y = all_data['speed'].quantile(0.25)
q3_y = all_data['speed'].quantile(0.75)

# Filter the dataset to keep only the data within the quartiles for each feature
filtered_dataset = all_data[(all_data['deviation'] >= q1_x - 5) & (all_data['deviation'] <= q3_x + 5) &
                        (all_data['speed'] >= q1_y) & (all_data['speed'] <= q3_y)]

features = filtered_dataset[['deviation','speed']]


# now cluster it after removing extream values
kmeans = KMeans(n_clusters=2)
kmeans.fit(features)
# Get the cluster labels assigned to each data point
labels = kmeans.labels_

# Separate the data points into clusters based on the labels
cluster1 = features[labels == 1]
cluster2 = features[labels == 0]

# Plot the clusters
plt.scatter(cluster1['deviation'], cluster1['speed'], color='green', label='Cluster 1')
plt.scatter(cluster2['deviation'], cluster2['speed'], color='red', label='Cluster 2')

# Add labels and title
plt.xlabel('Deviation')
plt.ylabel('Speed')
plt.title('Clustering')

# Add legend
plt.legend()

# Display the plot
plt.show()


# call clustring result function 2 right + 1 wrong -> right 1
print (clustring_result([[1.85,25],[1.55,15.4],[2.44,21.3]]))


#In[]

# test and split the data 
from sklearn.model_selection import train_test_split

y = filtered_dataset['class']
x_train, x_test, y_train, y_test = train_test_split(features,y, test_size=0.3, stratify=y, random_state=2)

# Model by logistic
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(x_train, y_train)
x_test_prediction = model.predict(x_test)
testing_data_accuracy = accuracy_score(x_test_prediction, y_test)
print('Acuracy on Testing Data using logistic regression:: ', testing_data_accuracy)
print("\n")

#svm
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix
#linear
svm = SVC(kernel='linear')
svm.fit(x_train, y_train)
y_pred = svm.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
print('Model SVM using linear kernal accuracy is: ', accuracy)
print("\n")


#sigmoid
svm = SVC(kernel='sigmoid')
svm.fit(x_train, y_train)
y_pred = svm.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
print('Model SVM using linear sigmoid accuracy is: ', accuracy)
print("\n")


#poly
svm = SVC(kernel='poly')
svm.fit(x_train, y_train)
y_pred = svm.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
print('Model SVM using linear poly accuracy is: ', accuracy)
print("\n")

#naive bayes
classifier = GaussianNB()
classifier.fit(x_train, y_train)
y_pred  =  classifier.predict(x_test)
cm = confusion_matrix(y_test, y_pred)
print("Accuracy using naive Bayes is:",accuracy_score(y_test, y_pred))


#nural network
from sklearn.neural_network import MLPClassifier
from sklearn.neighbors import KNeighborsClassifier

#identity
NN = MLPClassifier(activation ='identity', alpha=0.0001,hidden_layer_sizes=(20,23),max_iter=500)
NN.fit(x_train, y_train)
x_test_prediction = NN.predict(x_test)
result = accuracy_score(x_test_prediction,y_test)
print('Model neural network identity activation accuracy : ', result)
print("\n")


#logistic
NN = MLPClassifier(activation ='logistic', alpha=0.0001,max_iter=500)
NN.fit(x_train, y_train)
x_test_prediction = NN.predict(x_test)
result = accuracy_score(x_test_prediction,y_test)
print('Model neural network logistic activation accuracy : ', result)
print("\n")


#relu
NN = MLPClassifier(activation ='relu', alpha=0.0001,max_iter=5000)
NN.fit(x_train, y_train)
x_test_prediction = NN.predict(x_test)
result = accuracy_score(x_test_prediction,y_test)
print('Model neural network relu activation accuracy : ', result)
print("\n")














# #knn
# model=KNeighborsClassifier(n_neighbors=11,p=2)
# model.fit(x_train,y_train)
# x_test_prediction = model.predict(x_test)
# result =accuracy_score(y_test,x_test_prediction)
# print('Model KNN accuracy : ', result)
# print("\n")

