function runningSum(arr) {
    let sum = 0;
    let runningSumArray = [];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        runningSumArray.push(sum);
    }

    return runningSumArray;
}

// Example usage
console.log(runningSum([2, 5, 1, 6])); // Output: [2, 7, 8, 14]
console.log(runningSum([3, 1, 4, 1])); // Output: [3, 4, 8, 9]
