//Convert all the strings to title caps in a string array using arrow functions.

 const myfun = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
 };
console.log(myfun('I am a super man')); //I Am A Super Man

