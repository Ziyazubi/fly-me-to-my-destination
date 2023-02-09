let arr = [1, 6, 3, 4, 5, 0, 0, 0, 6];

let n = arr.length;

console.log("No of Airports: ", n); 

const flyMe = (arr, n) => {
    if (n <= 1) {
        return 0;
      }
      if (arr[0] == 0) {
        return -1;
      }
      let currMaxReach = arr[0];
      let fuelCount = arr[0];
      let jump = 1;
      let i = 1;
    
      for (i = 1; i < n; i++) {
        if (i == n - 1) {
          return jump;
        }
        currMaxReach = Math.max(currMaxReach, i + arr[i]);
        fuelCount--;
    
        if (fuelCount == 0) {
          jump++;
          if (i >= currMaxReach) {
            return -1;
          }
          fuelCount = currMaxReach - i;
        }
      }
      return -1;
} 

let noOfPlanes = flyMe(arr, n);
if(noOfPlanes == -1){
    console.log("Out of fuel!");
}
else if(n == 1){
    console.log("You are in the same airport");
}
else
    console.log("The number of planes to hire: ", noOfPlanes);