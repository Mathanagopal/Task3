// Function to check if a string is a palindrome
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

// Function to return all palindromes in an array
const findPalindromes = arr => {
    return arr.filter(item => isPalindrome(item));
};

// Example array
const words = ["radar", "hello", "level", "world", "noon","deified"];

// Finding palindromes in the array
const palindromes = findPalindromes(words);

console.log("Palindromes:", palindromes); //Palindromes: [ 'radar', 'level', 'noon', 'deified' ]
