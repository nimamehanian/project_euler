// PROJECT EULER

// PROBLEM 1
const sumMultiplesOf3and5Below1000 = () => (
  [...Array(1000).keys()].reduce((sum, num) => (
    num % 3 === 0 || num % 5 === 0 ? sum + num : sum
  ))
);
console.log(sumMultiplesOf3and5Below1000());


// PROBLEM 2
const sumFibsBelowFourMill = (fibs, sum) => (
  fibs[1] <= 4000000
    ? sumFibsBelowFourMill(
      [fibs[1], fibs[0] + fibs[1]],
      sum += fibs[1] % 2 === 0 ? fibs[1] : 0
    )
    : sum
);
console.log(sumFibsBelowFourMill([1, 2], 0));

// PROBLEM 3
