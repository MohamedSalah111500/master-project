import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.layers import LSTM, GRU, Bidirectional, Conv1D, MaxPooling1D, GlobalAveragePooling1D, Dense, Flatten, SimpleRNN
from tensorflow.keras.models import Sequential
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping

# Load and preprocess the dataset
data_path = '../agg_dataset/driving_data_edit.csv'
data_df = pd.read_csv(data_path)

# Map the 'label' column to 0 for abnormal and 1 for normal
data_df['label'] = data_df['label'].map({1: 0, 2: 1})

# Define the features and label
feature_columns = ['Lane', 'Speed', 'preceding_speed', 'road_condition', 'timestamp']
X = data_df[feature_columns]
y = data_df['label']

# One-hot encode categorical columns
categorical_features = ['Lane', 'road_condition']
X = pd.get_dummies(X, columns=categorical_features)

# Normalize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Define the window size and create sequences
window_size = 9  # Number of time steps in a sequence

# Function to create sequences
def create_sequences(X, y, window_size):
    Xs, ys = [], []
    for i in range(len(X) - window_size + 1):
        Xs.append(X[i:(i + window_size)])
        ys.append(y[i + window_size - 1])
    return np.array(Xs), np.array(ys)

X_seq, y_seq = create_sequences(X_scaled, y.values, window_size)

# Split the dataset into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X_seq, y_seq, test_size=0.2, random_state=42)

# List of models to train
models = [
    Sequential([
        LSTM(20, activation='relu', input_shape=(window_size, X_train.shape[2])),
        Dense(1, activation='sigmoid')
    ], name="LSTM"),
    
    Sequential([
        GRU(20, activation='relu', input_shape=(window_size, X_train.shape[2])),
        Dense(1, activation='sigmoid')
    ], name="GRU"),
    
    Sequential([
        Bidirectional(LSTM(20, activation='relu'), input_shape=(window_size, X_train.shape[2])),
        Dense(1, activation='sigmoid')
    ], name="BiLSTM"),
    
    Sequential([
        Conv1D(filters=64, kernel_size=3, activation='relu', input_shape=(window_size, X_train.shape[2])),
        MaxPooling1D(pool_size=2),
        Flatten(),
        Dense(50, activation='relu'),
        Dense(1, activation='sigmoid')
    ], name="1D_CNN"),  # Name adjusted here
    
    Sequential([
        SimpleRNN(20, activation='relu', input_shape=(window_size, X_train.shape[2])),
        Dense(1, activation='sigmoid')
    ], name="SimpleRNN"),
    
    Sequential([
        Conv1D(filters=32, kernel_size=3, activation='relu', padding='same', input_shape=(window_size, X_train.shape[2])),
        MaxPooling1D(pool_size=2),
        Conv1D(filters=64, kernel_size=3, activation='relu', padding='same'),
        MaxPooling1D(pool_size=2),
        Flatten(),
        Dense(50, activation='relu'),
        Dense(1, activation='sigmoid')
], name="Deeper_1D_CNN_Adjusted")
]

# Early stopping callback
early_stopping = EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)

# Train and evaluate each model
for model in models:
    print(f"\nTraining and evaluating model: {model.name}")
    model.compile(optimizer=Adam(learning_rate=0.001, clipvalue=1.0), loss='binary_crossentropy', metrics=['accuracy'])
    model.fit(X_train, y_train, epochs=20, validation_data=(X_val, y_val), callbacks=[early_stopping], verbose=1)
    loss, accuracy = model.evaluate(X_val, y_val, verbose=0)
    print(f"window size{window_size}-{model.name} Validation Accuracy: {accuracy*100:.2f}%")