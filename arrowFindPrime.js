//Return all the prime numbers in an array using arrow function
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var prime = [];

const isPrime = (item) => {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) {
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime); //[ 1, 2, 3, 5, 7 ]
