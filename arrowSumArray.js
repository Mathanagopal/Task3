// Sum of all numbers in an array using arrow function

let arr = [3, 7, 4, 89, 121];

const sumArray = (arr, index) => {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}
 
console.log(sumArray(arr, 0));//Sum is 224