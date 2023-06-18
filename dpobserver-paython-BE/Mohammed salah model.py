# import needed pacages 
import os
import json
import pandas as pd



# needed data structures 
right_deviation = list()
right_speed = list()


   


# Set the directory path where the JSON files are located
right_data_dir_path = "dpobserver-data/right data"

# Loop through all files in the directory
for file_name in os.listdir(right_data_dir_path):
    # Check if the file is a JSON file
    if file_name.endswith(".json"):
        # Read the contents of the file
        with open(os.path.join(right_data_dir_path, file_name), "r") as json_file:
            data = json.load(json_file)
            for row in data:
                right_deviation.append((float(row[0])))
                right_speed.append(float(row[1]))
                

# needed data structures 
wrong_deviation = list()
wrong_speed = list()



# Set the directory path where the JSON files are located
right_data_dir_path = "dpobserver-data/wrong data"

# Loop through all files in the directory
for file_name in os.listdir(right_data_dir_path):
    # Check if the file is a JSON file
    if file_name.endswith(".json"):
        # Read the contents of the file
        with open(os.path.join(right_data_dir_path, file_name), "r") as json_file:
            data = json.load(json_file)
            
            for row in data:
                div = float(row[0])
                if div > -3.5 and div < 3.5:
                    div += 3.5
                
                speed = float(row[1])
                if speed< 35:
                    speed+=15
                wrong_deviation.append((div))
                wrong_speed.append(speed)
                


# build datasets 

# Create a dictionary with the data
data = {
    'deviation': right_deviation,
    'speed': right_speed,
    'class': 1
}

# Create a dataframe from the dictionary
df = pd.DataFrame(data)

# Export the dataframe as a CSV file
df.to_csv('right_data.csv', index=False)


# Create a dictionary with the data
data = {
    'deviation': wrong_deviation,
    'speed': wrong_speed,
    'class': 0              # =IF(OR(B2>35,OR(A2>3.5,A2<-3.5)),0,1)
    
}

# Create a dataframe from the dictionary
df = pd.DataFrame(data)

# Export the dataframe as a CSV file
df.to_csv('wrong_data.csv', index=False)


# merge 2 datasets


# read the two datasets
df1 = pd.read_csv('right_data.csv')
df2 = pd.read_csv('wrong_data.csv')

# merge the two datasets based on a common column
merged_df = pd.concat([df1, df2], axis=0)

# Export the dataframe as a CSV file
merged_df.to_csv('all_data.csv', index=False)


# print the merged dataset
print(merged_df)



# machine Learning model 

#read all_data 
data = pd.read_csv("all_data.csv")

X=data.drop("class",axis=1)
y=data['class']


# pre-processing 
from sklearn import preprocessing
X= preprocessing.normalize(X)


# test and split the data 
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.3, stratify=y, random_state=2)

# Model by logistic
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
model = LogisticRegression()
model.fit(x_train, y_train)
x_test_prediction = model.predict(x_test)
testing_data_accuracy = accuracy_score(x_test_prediction, y_test)
print('Acuracy on Testing Data using logistic regression:: ', testing_data_accuracy)
print("\n")

#svm
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix,accuracy_score
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
print (NN.predict([[0.5,]]))

#knn
model=KNeighborsClassifier(n_neighbors=11,p=2)
model.fit(x_train,y_train)
x_test_prediction = model.predict(x_test)
result =accuracy_score(y_test,x_test_prediction)
print('Model KNN accuracy : ', result)
print("\n")

