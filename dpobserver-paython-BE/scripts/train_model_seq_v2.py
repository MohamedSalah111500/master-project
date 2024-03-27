import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from tensorflow.keras.optimizers import Adam,SGD
from tensorflow.keras.layers import Dropout
from tensorflow.keras.regularizers import l2

# Load the datasets
normal_df = pd.read_csv('../ready_data/normal_data.csv')
abnormal_df = pd.read_csv('../ready_data/abnormal_data.csv')
test_file_path = '../ready_data/normal_data_2.csv'  # Path to file for testing the model

# Merge and shuffle the datasets
combined_df = pd.concat([normal_df, abnormal_df], axis=0).sample(frac=1, random_state=42)

# Separate features and labels
X = combined_df.drop(['label'], axis=1).values
y = combined_df['label'].values

# Normalize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Function to create sequences
def create_sequences(X, y, window_size):
    Xs, ys = [], []
    for i in range(len(X) - window_size):
        Xs.append(X[i:(i + window_size)])
        ys.append(y[i + window_size])
    return np.array(Xs), np.array(ys)

# Define the window size
window_size = 6  # Number of time steps in a sequence

# Create sequences
X_seq, y_seq = create_sequences(X_scaled, y, window_size)

# Split the dataset into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X_seq, y_seq, test_size=0.2, random_state=42)

# Define and compile the LSTM model
model = Sequential([
    LSTM(20, activation='relu', input_shape=(window_size, X_train.shape[2])),
    Dense(1, activation='sigmoid')
])
model.compile(optimizer=Adam(learning_rate=0.001), loss='binary_crossentropy', metrics=['accuracy'])


# Train the model
history = model.fit(X_train, y_train, epochs=20, validation_data=(X_val, y_val))

# Evaluate the model
loss, accuracy = model.evaluate(X_val, y_val)
print(f'Validation Accuracy: {accuracy*100:.2f}%')

# Function to predict new data, excluding 'timestamp' column if present
def predict_new_data(file_path):
    new_data = pd.read_csv(file_path)
    # Exclude 'timestamp' column if it exists in the new data
    features_to_exclude = ['timestamp']
    features_present = [col for col in features_to_exclude if col in new_data.columns]
    new_data_processed = new_data.drop(features_present, axis=1)
    new_data_scaled = scaler.transform(new_data_processed)
    # Create sequences from new data
    new_data_seq, _ = create_sequences(new_data_scaled, np.zeros(len(new_data_scaled)), window_size)
    predictions = model.predict(new_data_seq)
    # Calculate the mean of the predictions to get an overall percentage of abnormality
    mean_prediction = predictions.mean()

    # Interpret the mean prediction
    if mean_prediction > 0.5:
        result = f"Primarily Abnormal ({mean_prediction * 100:.2f}%)"
    else:
        result = f"Primarily Normal ({(1 - mean_prediction) * 100:.2f}%)"

    return result


# Example usage
result = predict_new_data(test_file_path)
print(f"Driving Pattern Assessment: {result}")