//Print odd numbers in an array using Arrow function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(oddNumbers); //[ 1, 3, 5, 7, 9 ]