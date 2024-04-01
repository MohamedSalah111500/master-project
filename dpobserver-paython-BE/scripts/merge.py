
# import pandas as pd

# # Load the datasets
# file_path_2 = '../agg_dataset/Train_Vehicletravellingdata.csv'
# file_path_1 = '../agg_dataset/Train.csv'

# # Assume 'ID' is the common identifier column and 'label' is the column we want to add
# first_df = pd.read_csv(file_path_1)
# second_df = pd.read_csv(file_path_2)

# # Merge the two dataframes based on the 'ID' column
# # This will add the 'label' column from the first dataframe to the second
# merged_df = pd.merge(second_df, first_df[['ID', 'label']], on='ID', how='left')

# # Save the merged dataframe to a new CSV file
# merged_file_path = '../agg_dataset/merged_file.csv'
# merged_df.to_csv(merged_file_path, index=False)

# print(f"Merged file saved to {merged_file_path}")


# import pandas as pd

# # Load the complete dataset
# data = pd.read_csv('../agg_dataset/driving_data.csv')

# # Split the dataset into two based on the 'label' column
# normal_data = data[data['label'] == 2]
# abnormal_data = data[data['label'] == 1]

# # Define file paths for the split datasets
# normal_file_path = '../agg_dataset/normal_data.csv'
# abnormal_file_path = '../agg_dataset/abnormal_data.csv'

# # Save the normal data to a CSV file
# normal_data.to_csv(normal_file_path, index=False)

# # Save the abnormal data to a CSV file
# abnormal_data.to_csv(abnormal_file_path, index=False)


# import pandas as pd

# # Replace 'path_to_your_csv_file.csv' with the path to your CSV file
# csv_file_path = '../agg_dataset/driving_data.csv'
# output_csv_file_path = '../agg_dataset/driving_data.csv'  # Replace with the desired path for the output CSV file

# # Read the CSV file
# data_df = pd.read_csv(csv_file_path)

# # Convert the 'Date' column to UNIX timestamps
# data_df['timestamp'] = pd.to_datetime(data_df['Date']).astype('int64') // 10**9

# # Save the DataFrame with the new 'timestamp' column to a new CSV file
# data_df.to_csv(output_csv_file_path, index=False)

# print(f"The file was saved with timestamps at: {output_csv_file_path}")


import pandas as pd

# Replace 'path_to_your_csv_file.csv' with the actual path to your CSV file
csv_file_path = '../agg_dataset/driving_data.csv'
output_csv_file_path = '../agg_dataset/driving_data_edit.csv'  # Replace with the path where you want to save the filtered CSV

# Load the data into a DataFrame
data_df = pd.read_csv(csv_file_path)

# Remove rows where the 'label' column is equal to 3
data_df = data_df[data_df['label'] != 3]

# Save the filtered DataFrame to a new CSV file
data_df.to_csv(output_csv_file_path, index=False)
