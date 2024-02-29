import numpy as np

# Sample data
acceleration_x = [0, -1.6248639, 3-0.5946599,0.7384782,0.101741076,0.15846956]  # acceleration in x-direction (m/s^2)
acceleration_y = [0, -1.0824918, -0.122409865,-0.22845554,0.7775676,0.34589112]  # acceleration in y-direction (m/s^2)
acceleration_z = [0, -0.20418262, 0.2205019,0.66773224,-0.066729546,0.3552742]  # acceleration in z-direction (m/s^2)
timestamps = [3581629, 3581630, 3581630,3581631,3581631,3581632]  # timestamps (seconds)

# Convert timestamps to time differentials
time_diffs = np.diff(timestamps)

# Integrate acceleration twice to get distance
distance_x = np.cumsum(np.cumsum(acceleration_x[:-1] * time_diffs))
distance_y = np.cumsum(np.cumsum(acceleration_y[:-1] * time_diffs))
distance_z = np.cumsum(np.cumsum(acceleration_z[:-1] * time_diffs))

# Calculate total distance (assuming motion in 3D)
total_distance = np.sqrt(distance_x[-1]**2 + distance_y[-1]**2 + distance_z[-1]**2)
print("total_distance:", total_distance)
# Calculate time
total_time = timestamps[-1]

# Calculate speed
speed_mps = total_distance / total_time  # speed in meters per second

# Convert speed to kilometers per hour (km/h)
speed_kph = speed_mps * 3.6  # 1 m/s = 3.6 km/h

print("Speed (km/h):", speed_kph)
