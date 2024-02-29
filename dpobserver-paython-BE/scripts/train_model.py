import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import LSTM, Dense
from keras.optimizers import Adam

# Load data from two separate files (replace with your actual paths)
normal_data = '../ready_data/normal_data.csv'
abnormal_data = '../ready_data/abnormal_data.csv'

data_x = pd.read_csv(normal_data)
data_y = pd.read_csv(abnormal_data)

# Define features and target variable
features = ['acc_x', 'speed_x_km', 'time', 'acc_y', 'speed_y_km', 'speed']
target = 'label'  # Adjust with your target column name

# Split data into features (X) and target variable (y)
X = pd.concat([data_x[features], data_y[features]]).astype(float)
y = pd.concat([data_x[target], data_y[target]]).astype(float)

# Split data into train and test sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalize features
scaler = MinMaxScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Reshape data for LSTM (samples, timesteps, features)
X_train_reshaped = X_train_scaled.reshape((X_train_scaled.shape[0], 1, X_train_scaled.shape[1]))
X_test_reshaped = X_test_scaled.reshape((X_test_scaled.shape[0], 1, X_test_scaled.shape[1]))

# Build LSTM model
model = Sequential()
model.add(LSTM(units=50, activation='relu', input_shape=(X_train_reshaped.shape[1], X_train_reshaped.shape[2])))
model.add(Dense(units=1))
model.compile(optimizer=Adam(), loss='mean_squared_error')

# Train the model
model.fit(X_train_reshaped, y_train, epochs=50, batch_size=32, verbose=0)

# Evaluate the model
loss = model.evaluate(X_test_reshaped, y_test, verbose=0)
print("Test Loss:", loss)

# Predict on test data
y_pred = model.predict(X_test_reshaped)

# Convert y_test and y_pred to NumPy arrays
y_test_np = y_test.values
y_pred_np = np.squeeze(y_pred)

# Ensure y_test_np has the same number of dimensions as y_pred_np
y_test_np = np.squeeze(y_test_np)

# Calculate accuracy
mask = (y_test_np != 0) & (y_pred_np != 0)  # Exclude elements where both y_test and y_pred are zero
accuracy = np.mean(np.abs((y_test_np[mask] - y_pred_np[mask]) / y_test_np[mask])) * 100
print("Accuracy:", 100 - accuracy)  