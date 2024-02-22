let arr = [3, 7, 4, 89, 121];
 
function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}
 
console.log("Sum is " + sumArray(arr, 0)); //Sum is 224