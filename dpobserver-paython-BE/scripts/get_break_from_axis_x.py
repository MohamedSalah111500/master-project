import pandas as pd

# Read the CSV file
df = pd.read_csv('../new_data/abnormal_data.csv')

# Assuming the column containing acceleration in the x-axis is named 'AccX'
AccX = df['AccX']

# Define a threshold for detecting braking events
threshold = -2  # Adjust as needed

# Initialize a list to store the braking periods
brake_periods = []

# Detect braking periods
braking_started = False
for i in range(len(AccX)):
    if AccX[i] < threshold:
        if not braking_started:
            braking_started = True
            start_index = i
    elif braking_started:
        braking_started = False
        end_index = i
        brake_periods.append((start_index, end_index))

# Create a new column 'brake' and initialize with 0
df['brake'] = 0

# Mark braking periods in the 'brake' column
for start_index, end_index in brake_periods:
    df.loc[start_index:end_index, 'brake'] = 1

# Save the updated DataFrame to a new CSV file
df.to_csv('../new_data/abnormal_data.csv', index=False)




