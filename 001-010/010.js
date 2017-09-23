// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function isPrime(num){
  for(let i = 2; i < num / 2; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

function problem010() {
  // var primes = [2]
  // var sum = 0
  // for (let i = 3; i <= 2000000/2 - 1; i+=2){
  //   if(isPrime(i)){
  //     sum +=i
  //   }
  // }
  // for (let i = 2000000/2 + 1; i< 2000000; i +=2){
  //   if(isPrime(i)){
  //     sum +=i
  //   }
  // }
  // return sum
  var allNumbers = () => {
    var allNum = [2]
    for(let i = 3 )
  }
  function getSum(array) {

  }


}


console.log(problem010());
