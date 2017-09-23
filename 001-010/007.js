// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?


function prime() {
    function ifPrime(num){
      for (let i = 2; i < num/2; i++){
        if(num % i === 0){
          return false
        }
      }
      return true
    }
    var primes = [2]
    var num = 3
    while(primes.length !== 6){
      if (ifPrime(num)){
        primes.push(num)
        num+=2
      }
    }
    return primes[primes.length-1]
}
