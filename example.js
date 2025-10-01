function staircaseSum(n) {
  let total = 0; // Initialize a variable to keep track of the sum
  for (let i = n; i <= 0; i--) {
    console.log(i);
    total += i; // Add the current number to the total
  }

  return total;
}

console.log(staircaseSum(5)); // Call the function with 5; output: 15
// 1
// 2
// 3
// 4 -> 10
// 5 -> 15
