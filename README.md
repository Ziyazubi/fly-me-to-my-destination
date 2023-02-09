# fly-me-to-my-destination

# Problem Statement
You are initially positioned at airport number one and you have to reach the last airport (N) by hiring a minimum number of planes. You'd need 1 unit of fuel to fly to the nearest airport from any airport. 

Given an array of N numbers each representing the units of fuel available in the plane at that particular airport. Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1.

# Example: 

Array = [2,1,2,3,1]

In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only. The minimum number of planes required in this case is two 2 → 2→ 1. 

Example 2:

Array = [1,6,3,4,5,0,0,0,6]

In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6

# Explanation:

Initially, we set: 
currMaxReach = value of first index of array
fuelCount: value of first index of array
jump = 1 (current jump we are making)

Here, 
currMaxReach: maximum we can reach from that index
	i.e., index + value at that index
fuelCount: stores the number of steps we can still take in the current jump

At each iteration, from i = 1 to n-1, 
	a. Initially, We check if we have reached the end of array. If yes, we simply return jump
	
	b. Update current max reach
	 	The currMaxReach stores the max reach, i.e. currMaxReach = max(currMaxReach, i + arr[i])
	 	
	c. Then we reduce our fuelCount by 1 (since we consume 1 unit each time as we move forward).

And whenever we run out of fuel, it means we need to take one jump. (i.e. jump = jump + 1)

	d. We again initialize the fuelCount to the number of fuelCount to reach currMaxReach from position i, and update the fuelCount to fuelCount = currMaxReach - i (i.e. the maximum reach possible from the current index).
	But before re-initializing fuelCount, we also check whether a fuelCount is becoming zero or negative. So, we can take those steps and then we need to jump again.

And when we reach the end of array we return jump as our output. 

The code returns -1, if we cannot reach the last airport.
