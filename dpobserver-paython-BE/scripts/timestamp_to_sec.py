import pandas as pd

# Read the CSV file
df = pd.read_csv('../new_data/trining_data_x_y_z.csv')

# Assuming the column containing timestamps is named 'timestamp'
df['date'] = pd.to_datetime(df['Timestamp'] , unit='s')  # Convert milliseconds to date

# Extract hour, minute, and second components
df['hour'] = df['date'].dt.hour
df['minute'] = df['date'].dt.minute
df['second'] = df['date'].dt.second
# Save the updated DataFrame to the same CSV file, overwriting it
df.to_csv('../new_data/sec_time_data.csv', index=False)
