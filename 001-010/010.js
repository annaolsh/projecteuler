// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function problem010(n){
  // Eratosthenes algorithm to find all primes under n
  var array = [], upperLimit = Math.sqrt(n), sum = 0;

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
          array[j] = false;
      }
    }
  }

  for (var i = 2; i < n; i++) {
    if(array[i]) {
      sum += i
    }
  }

  return sum;
}
console.log(problem010(2000000));
