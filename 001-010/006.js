// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function difference() {
  function sumOfSquares(){
    var counter = 1
    var sum = 0
    while (counter <= 100){
      sum += counter ** 2
      counter++
    }
    return sum
  }

  function squareOfSum(){
    var counter = 1
    var sum = 0
    while(counter <=100){
      sum += counter
      counter++
    }
    return sum ** 2
  }

  return squareOfSum() - sumOfSquares()
}
