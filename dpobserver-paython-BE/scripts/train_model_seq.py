import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import LSTM, Dense
from keras.optimizers import Adam

def prepare_sequences(data, window_size):
    # Create sequences from the sequential data using a sliding window approach
    sequences = []
    for i in range(len(data) - window_size + 1):
        sequence = data[i:i + window_size]
        sequences.append(sequence)
    return np.array(sequences)

def load_data(normal_file, abnormal_file):
    # Load normal and abnormal data from CSV files
    normal_data = pd.read_csv(normal_file)
    abnormal_data = pd.read_csv(abnormal_file)

    # Combine normal and abnormal data
    data = pd.concat([normal_data, abnormal_data], ignore_index=True)

    # Extract sequential feature data
    sequential_features = ['acc_x', 'speed_x_km', 'acc_y', 'speed_y_km', 'speed']  # Adjust as needed
    sequential_data = data[sequential_features].values

    # Normalize features
    scaler = MinMaxScaler()
    sequential_data_scaled = scaler.fit_transform(sequential_data)

    # Define target variable (1 for normal, 0 for abnormal)
    target = 'label'
    y = data[target].values

    return sequential_data_scaled, y

def train_model(normal_file, abnormal_file, window_size):
    # Load data from CSV files
    sequential_data, y = load_data(normal_file, abnormal_file)

    # Prepare sequential data sequences
    sequences = prepare_sequences(sequential_data, window_size)

    # Build LSTM model
    model = Sequential()
    model.add(LSTM(units=50, activation='relu', input_shape=(sequences.shape[1], sequences.shape[2])))
    model.add(Dense(units=1, activation='sigmoid'))  # Output layer with sigmoid activation for binary classification
    model.compile(optimizer=Adam(), loss='binary_crossentropy', metrics=['accuracy'])

    # Train the model
    model.fit(sequences, y, epochs=50, batch_size=32, verbose=0)

    # Return the trained model
    return model

def predict_sequence_label(model, sequence):
    # Normalize input sequence
    scaler = MinMaxScaler()
    sequence_scaled = scaler.fit_transform(sequence)

    # Reshape input sequence for LSTM (samples, timesteps, features)
    sequence_reshaped = sequence_scaled.reshape((1, sequence_scaled.shape[0], sequence_scaled.shape[1]))

    # Predict label for input sequence
    predicted_label = model.predict_classes(sequence_reshaped)

    # Return the predicted label
    return predicted_label[0][0]

# Example usage:
normal_file_path = '../ready_data/normal_data.csv'
abnormal_file_path = '../ready_data/abnormal_data.csv'
window_size = 5  # Adjust as needed

# Train the model
trained_model = train_model(normal_file_path, abnormal_file_path, window_size)

# Example input sequence (you can load this from a CSV file if needed)
# input_sequence = np.array([[0.1, 50, 0.2, 60, 70],
#                             [0.3, 55, 0.1, 58, 75],
#                             [0.2, 52, 0.3, 62, 72],
#                             [0.4, 54, 0.2, 63, 76],
#      

file_path = '../ready_data/test_right.csv'

input_sequence = np.array([[0.1, 50, 0.2, 60, 70],
                            [0.3, 55, 0.1, 58, 75],
                            [0.2, 52, 0.3, 62, 72],
                            [0.4, 54, 0.2, 63, 76],
                            [0.3, 56, 0.4, 61, 74]])

# Predict label for the input sequence
predicted_label = predict_sequence_label(trained_model, input_sequence)
print("Predicted label for the sequence:", predicted_label)
