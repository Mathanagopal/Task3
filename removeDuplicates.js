//Remove Duplicates from an array using function
let arr = ["sugar", "common", "common","orange", "vivek", "sugar"];
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr)); //[ 'sugar', 'common', 'orange', 'vivek' ]