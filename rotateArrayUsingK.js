// Function to rotate an array by k times
function rotateArray(arr, k) {
    const n = arr.length;
    // Calculate the effective rotation count
    const rotations = k % n;
    // Rotate the array using Array.prototype.splice()
    const rotatedArray = arr.splice(n - rotations).concat(arr.splice(0, n - rotations));
    return rotatedArray;
}

// Example array
const numbers = [1, 2, 3, 4, 5];
const k = 2;

// Rotate the array by k times
const rotatedNumbers = rotateArray(numbers, k);

console.log("Original Array:", numbers);
console.log("Rotated Array:", rotatedNumbers); //Original Array: [] // Rotated Array: [ 4, 5, 1, 2, 3 ]