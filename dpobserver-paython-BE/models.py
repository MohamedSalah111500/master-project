import re
import json
import joblib
import numpy as np

def predict(file, model_name='nb'):
    """
    Predicts a class label using a trained machine learning model based on JSON data.

    Args:
        file (file): The file object containing JSON data.
        model_name (str): The name of the trained model to use ('nb', 'svm', 'knn', 'nn', or 'lr').

    Returns:
        str: The predicted class label.
    """
    try:
        # Define a regular expression pattern to match alphabetic characters
        pattern = re.compile('[a-zA-Z]')

        # Read the JSON content from the file
        # json_content = file.read()
        json_content = file

        # Remove alphabetic characters from the JSON content
        # cleaned_json_content = pattern.sub('', json_content)
        cleaned_json_content = json_content


        # Load the cleaned JSON content into a Python dictionary
        # scenario = json.loads(cleaned_json_content)
        scenario = cleaned_json_content

        # Calculate the mean for each feature
        means_array = np.mean(scenario, axis=0)

        if model_name == 'nb':
            # Load the saved Naive Bayes model
            loaded_model = joblib.load('NB_model.pkl')
            # Make predictions with the loaded model
            return loaded_model.predict([means_array])

        elif model_name == 'svm':
            # Load the saved SVM model
            loaded_model = joblib.load('svm_model.pkl')
            # Make predictions with the loaded model
            return loaded_model.predict([means_array])

        elif model_name == 'knn':
            # Load the saved K-Nearest Neighbors model
            loaded_model = joblib.load('KNN_model.pkl')
            # Make predictions with the loaded model
            return loaded_model.predict([means_array])

        elif model_name == 'nn':
            # Load the saved Neural Network model
            loaded_model = joblib.load('NN_model.pkl')
            # Make predictions with the loaded model
            return loaded_model.predict([means_array])

        elif model_name == 'lr':
            # Load the saved Logistic Regression model
            loaded_model = joblib.load('LR_model.pkl')
            # Make predictions with the loaded model
            return loaded_model.predict([means_array])

        else:
            raise ValueError("Invalid model_name. Choose from 'nb', 'svm', 'knn', 'nn', or 'lr'.")

    except Exception as e:
        return f"An error occurred: {str(e)}"
