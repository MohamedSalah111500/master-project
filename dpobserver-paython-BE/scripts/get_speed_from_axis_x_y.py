

import pandas as pd
import numpy as np

# Read the CSV file
df = pd.read_csv('../new_data/normal_data.csv')


# Convert time components to seconds
# time_seconds = df['hour'] * 3600 + df['minute'] * 60 + df['second']

# Calculate time differences between consecutive rows to get time intervals in seconds
time_diff = np.diff(time_seconds)
time_diff = np.insert(time_diff, 0, 0)  # Insert 0 as the first time difference

# Assuming the columns are named 'AccX' and 'AccY'
AccX = df['AccX'].values
AccY = df['AccY'].values

# Calculate velocity along x and y axes by integrating acceleration over time
velocity_x = np.cumsum(AccX * time_diff)
velocity_y = np.cumsum(AccY * time_diff)

# Calculate speed from velocity (speed is the magnitude of velocity)
speed = np.sqrt(velocity_x**2 + velocity_y**2)

# Convert speed from m/s to km/h
speed_kmh = speed * 3.6

# Add the speed values (in km/h) to a new column in the DataFrame
df['speed_kmh'] = speed_kmh

# Save the updated DataFrame to a new CSV file
df.to_csv('../new_data/updated_normal_data.csv.csv', index=False)
