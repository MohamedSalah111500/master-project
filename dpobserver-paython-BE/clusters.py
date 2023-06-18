# -*- coding: utf-8 -*-
"""
Created on Sun Feb 19 11:38:14 2023

@author: Osama Ala'a
"""
""" 
# import needed pacages
import numpy as np
from sklearn.cluster import KMeans
from sklearn import preprocessing
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
wrong_data_dir_path = "dpobserver-data/wrong data"

# Loop through all files in the directory
for file_name in os.listdir(wrong_data_dir_path):
    # Check if the file is a JSON file
    if file_name.endswith(".json"):
        # Read the contents of the file
        with open(os.path.join(wrong_data_dir_path, file_name), "r") as json_file:
            data = json.load(json_file)

            for row in data:
                div = float(row[0])
                speed = float(row[1])
                wrong_deviation.append((div))
                wrong_speed.append(speed)


# build datasets

# Create a dictionary with the data
data = {
    'deviation': right_deviation,
    'speed': right_speed,

}

# Create a dataframe from the dictionary
df = pd.DataFrame(data)

# Export the dataframe as a CSV file
df.to_csv('right_data.csv', index=False)


# Create a dictionary with the data
data = {
    'deviation': wrong_deviation,
    'speed': wrong_speed,

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

# read all_data
data = pd.read_csv("all_data.csv")
dev_data = data['deviation']
# pre-processing
X = preprocessing.normalize(data)


# cluster the data into 2 classes
kmeans = KMeans(n_clusters=2, random_state=0)
labels = kmeans.fit_predict(pd.DataFrame(dev_data))
print(labels)


# label the data
data['class'] = labels

for i in range(data.shape[0]):
    if data['speed'][i] > 30:
        data['class'][i] = 1

# from sklearn.mixture import GaussianMixture
# n_clusters = 2
# gmm_model = GaussianMixture(n_components=n_clusters)
# gmm_model.fit(X)

# cluster_labels = gmm_model.predict(X)
# X = pd.DataFrame(X)
# X['class'] = labels

# plot findings
# import matplotlib.pyplot as plt

# for k in range(0,2):
#     plt.scatter(x = data['deviation'], y= data['speed'], c= 'red')

# plt.title("Clusters Identified by Guassian Mixture Model")
# plt.ylabel("Speed")
# plt.xlabel("deviation")
# plt.show()


# Loop through all files in the directory
for file_name in os.listdir(wrong_data_dir_path):
    # Check if the file is a JSON file
    if file_name.endswith(".json"):
        # Read the contents of the file
        with open(os.path.join(wrong_data_dir_path, file_name), "r") as json_file:

            data = json.load(json_file)
            # needed data structures
            wrong_deviation = list()
            wrong_speed = list()

            for row in data:
                div = float(row[0])
                speed = float(row[1])
                wrong_deviation.append((div))
                wrong_speed.append(speed)

            # Create a dictionary with the data
            data = {

                'deviation': wrong_deviation,
                'speed': wrong_speed,
            }

            # Create a dataframe from the dictionary
            df = pd.DataFrame(data)

            # Export the dataframe as a CSV file
            df.to_csv(
                f'dpobserver-data/wrong data/{file_name[:-5]}.csv', index=False)
"""

# In[]:

import os
import json
import pandas as pd
import numpy as np
# cluster based on datasets



# function Set the directory path where the JSON files are located 


def json_2_csv(directory_path):

    # needed data structures
    right_deviation = list()
    right_speed = list()
    # Loop through all files in the directory
    for file_name in os.listdir(directory_path):
        # Check if the file is a JSON file
        if file_name.endswith(".json"):
            # Read the contents of the file
            with open(os.path.join(directory_path, file_name), "r") as json_file:

                #load json file 
                data = json.load(json_file)

                #loop over json data
                for row in data:
                    div = float(row[0])
                    speed = float(row[1])
                    right_deviation.append((div))
                    right_speed.append(speed)

    # Create a dictionary with the data
    data = {

        'deviation': right_deviation,
        'speed': right_speed,
    }

    # Create a dataframe from the dictionary
    df = pd.DataFrame(data)
    
    # Export the dataframe as a CSV file
    df.to_csv(f'{directory_path}/all_data.csv', index=False)

# define needed Data Structures
right_cent = list()
wrong_cent = list()


def fit(right_data, wrong_data):
    
    # iterate for each dimention separately
    for dim in right_data:

        right_cent.append(np.mean(right_data[dim]))
        wrong_cent.append(np.mean(wrong_data[dim]))
    
    #return right and wrong centroid 
    return right_cent,wrong_cent


from math import dist
def predict(x):
    

    test_cent = list()
    r_sum = 0
    w_sum = 0
    
    
    for index in range(len(x[0])):
        column = [record[index] for record in x]
        test_cent.append(np.mean(column))

    # for index, val in enumerate(test_cent):
    #     r_sum += (right_cent[index] - val)**2
    #     w_sum += (wrong_cent[index] - val)**2

    right_dist = dist(test_cent,right_cent)#np.sqrt(r_sum)
    wrong_dist = dist(test_cent,wrong_cent) #np.sqrt(w_sum)



    if right_dist < wrong_dist:

        return {'prediction':0,'right_distance':right_dist , 'wrong_dist': wrong_dist}

    else:

        return {'prediction':1,'right_distance':right_dist , 'wrong_dist': wrong_dist}

#----------------------------- Main Section ---------------------------

#  Set the directory path where the JSON files are located
wrong_data = json_2_csv("dpobserver-data/wrong data")
right_data= json_2_csv("dpobserver-data/right data")

# Load the datasets from CSV files and concatenate them
right_data = pd.read_csv('right_data.csv')
wrong_data = pd.read_csv('wrong_data.csv')

# fit the model
fit(right_data, wrong_data)

""" 
# predict
test_data = pd.read_csv('dpobserver-data/wrong data/s3.csv')
print(predict(test_data))
"""

