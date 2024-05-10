

# import matplotlib.pyplot as plt
# import numpy as np

# # Data from your table
# models = ["LSTM", "BiLSTM", "GRU", "1D_CNN", "SimpleRNN", "Deeper_1D_CNN_Adjusted"]
# metrics = {
#     "Accuracy": [77.97, 84.10, 77.36, 78.51, 77.58, 76.49],
#     "Precision": [83.33, 76.47, 78.57, 75, 40.9, 75],
#     "Recall": [75, 74.37, 57.89, 66.67, 87.1, 66.67],
#     "F1 Score": [78.95, 74.17, 66.67, 70.59, 55.6, 70.59],
#     "Specificity": [82.35, 80, 84.21, 80, 29.1, 80]
# }

# # Create figure and axes
# fig, ax = plt.subplots(figsize=(12, 8))

# # Bar width
# bar_width = 0.09

# # The x position of bars
# bar_positions = np.arange(len(models))

# # Iterate over metrics to create a bar group for each
# for i, (metric_name, values) in enumerate(metrics.items()):
#     ax.bar(bar_positions + i*bar_width, values, width=bar_width, label=metric_name)

# # Add some text for labels, title, and custom x-axis tick labels
# ax.set_xlabel('Model')
# ax.set_ylabel('Percentage')
# ax.set_title('Comparison of Different Metrics Across Models')
# ax.set_xticks(bar_positions + bar_width * (len(metrics) - 1) / 2)
# ax.set_xticklabels(models)
# ax.legend()

# # Rotate the tick labels for better readability
# plt.setp(ax.get_xticklabels(), rotation=45, horizontalalignment='right')

# # Adding window size and activation function annotations
# window_size = 6
# activation_function = "relu"

# # Place text annotations for window size and activation function
# plt.text(-0.5, -12, f"Window size: {window_size}", fontsize=9, ha='left')
# plt.text(-0.5, -17, f"Activation Function: {activation_function}", fontsize=9, ha='left')

# # Remove top and right spines
# ax.spines['top'].set_visible(False)
# ax.spines['right'].set_visible(False)

# # Set a grid behind the bars
# ax.yaxis.grid(True, linestyle='--', which='major', color='grey', alpha=0.7)

# # Set a tight layout to adjust for the text annotations at the bottom
# plt.tight_layout()

# # Save the figure to a file
# plt.savefig('./graphs/model_performance_metrics.png', bbox_inches='tight')

# # Show the plot
# plt.show()

# import matplotlib.pyplot as plt
# import numpy as np

# # Data from the table
# models = ["LSTM", "BiLSTM", "GRU", "1D_CNN", "SimpleRNN", "Deeper_1D_CNN_Adjusted"]
# accuracy_18_sigmoid = [78.97, 78.08, 77.67, 77.73, 77.41, 77.81]
# accuracy_30_relu = [79.75, 77.87, 77.73, 77.86, 77.25, 81.70]

# # Set the position for the groups on the X axis
# bar_width = 0.35
# index = np.arange(len(models))

# # Create bars
# fig, ax = plt.subplots(figsize=(10, 6))

# bar1 = ax.bar(index, accuracy_18_sigmoid, bar_width, label='Window Size 18, Sigmoid', color='black')
# bar2 = ax.bar(index + bar_width, accuracy_30_relu, bar_width, label='Window Size 30, Relu', color='grey')

# # Add labels, title and axes ticks
# ax.set_xlabel('Model', fontsize=12)
# ax.set_ylabel('Accuracy (%)', fontsize=12)
# ax.set_title('Accuracy of Models by Window Size and Activation Function', fontsize=14)
# ax.set_xticks(index + bar_width / 2)
# ax.set_xticklabels(models, rotation=45)
# ax.set_ylim([70, 85])  # Set a y-limit for better comparison

# # Create legend & Show graphic
# ax.legend()

# # Save the figure to a file with a white background
# fig.patch.set_facecolor('white')
# plt.savefig('./graphs/model_performance_metrics2.png', bbox_inches='tight', facecolor=fig.get_facecolor())

# # Show the plot
# plt.show()

import matplotlib.pyplot as plt
import numpy as np

# Data from your table
models = ["LSTM", "BiLSTM", "GRU", "1D_CNN", "SimpleRNN", "Deeper_1D_CNN_Adjusted"]
accuracy_24_relu = [79.61, 78.12, 77.97, 77.85, 77.46, 78.21]
accuracy_9_relu = [77.86, 77.52, 77.43, 77.46, 77.32, 77.46]

# Set the position for the groups on the X axis
bar_width = 0.35
index = np.arange(len(models))

# Create the bar chart
fig, ax = plt.subplots(figsize=(10, 6))
bars1 = ax.bar(index, accuracy_24_relu, bar_width, label='Window Size 24, ReLU', color='black')
bars2 = ax.bar(index + bar_width, accuracy_9_relu, bar_width, label='Window Size 9, ReLU', color='grey')

# Add labels, title and axes ticks
ax.set_xlabel('Model', fontsize=12)
ax.set_ylabel('Accuracy (%)', fontsize=12)
ax.set_title('Model Accuracy by Window Size and Activation Function', fontsize=14)
ax.set_xticks(index + bar_width / 2)
ax.set_xticklabels(models, rotation=45)

# Create a legend
ax.legend()

# Save the plot to a file with a white background
plt.savefig('./graphs/model_performance_metrics3.png', bbox_inches='tight', facecolor='white')

# Show the plot
plt.show()
