
import pandas as pd

# Load the datasets
file_path_2 = '../agg_dataset/Train_Vehicletravellingdata.csv'
file_path_1 = '../agg_dataset/Train.csv'

# Assume 'ID' is the common identifier column and 'label' is the column we want to add
first_df = pd.read_csv(file_path_1)
second_df = pd.read_csv(file_path_2)

# Merge the two dataframes based on the 'ID' column
# This will add the 'label' column from the first dataframe to the second
merged_df = pd.merge(second_df, first_df[['ID', 'label']], on='ID', how='left')

# Save the merged dataframe to a new CSV file
merged_file_path = '../agg_dataset/merged_file.csv'
merged_df.to_csv(merged_file_path, index=False)

print(f"Merged file saved to {merged_file_path}")
