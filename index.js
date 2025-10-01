// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //print all sqaure numbers from 1-n
  for (let i = 1; i <= n; i++) {
    let sqr = i * i;
    console.log(sqr, i);
  }
};
printSquareNumbers(5);
// 1*1 =  1
// 2*2 =4
// 3*3 =9
// 4*4= 16
// 5*5 = 25
