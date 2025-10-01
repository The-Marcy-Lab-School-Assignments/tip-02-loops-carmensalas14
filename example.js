function staircaseSum(n) {
  let total = 0; // Initialize a variable to keep track of the sum

  for (let i = 1; i <= n; i++) {
    console.log(i);
    // Loop from 1 up to the given number
    total += i; // Add the current number to the total
  }

  return total;
}

console.log(staircaseSum(9)); // Call the function with 5; output: 15
// 1
// 2
// 3
// 4 -> 10
// 5 -> 15
