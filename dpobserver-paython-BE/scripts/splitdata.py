import pandas as pd

# Read the CSV file
df = pd.read_csv('../new_data/normal_data.csv')

# Split the DataFrame into chunks of 60 rows each
chunk_size = 60
chunks = [df[i:i+chunk_size] for i in range(0, len(df), chunk_size)]

# Save each chunk to a separate CSV file
for i, chunk in enumerate(chunks):
    chunk.to_csv(f'../new_data/normal_data/abnormal{i+1}.csv', index=False)
