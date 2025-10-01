// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //first will do this:
  let total = 0;
  for (let i = 1; i <= n; i++) {
    let sqr = i * i;
    console.log(sqr);
    //add sqr to a total
    total += sqr;
  }
  return total;
};
printSquareNumbers(5);
//we are squaring numbers 1-5
//how to we get all numbers 1-n?
//how do we sqaure numbers?
//add all the sqaure together?
//will print:
// 1*1 = 1
// 2*2 = 4
// 3*3 = 9
// 4*4 = 16
// 5*5 = 25
// Final output is: 55
