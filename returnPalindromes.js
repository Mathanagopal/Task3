// Return all the palindromes in an array using recursive function

const getAllPalindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
console.log(getAllPalindromes(["wow", "moon","noon","rotator"])); [ 'wow', 'noon', 'rotator' ] 
// [ 'wow', 'noon', 'rotator' ]