let inputNum = [1,2,3,4,5,6,7,8,9,10,11];
let outputNum = [];
for (const num of inputNum) {
  if (num % 2 === 1) {
    outputNum.push(num);
  }
}
console.log(outputNum); [ 1, 3, 5, 7, 9, 11 ]