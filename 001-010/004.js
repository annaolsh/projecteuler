//task:
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.


function largest(){

  var largestNum = 999 * 999

  function isPalindrome(num){
    var numString = num.toString()
    var firstHalf;
    var secondHalf;
    if(numString.length % 2 === 0){ //if num length is even number
      firstHalf = numString.slice(0, numString.length/2)
      secondHalf = numString.slice(numString.length/2, numString.length)
    } else { //if num length is odd number
      var half = Math.ceil(numString.length/2)
      firstHalf = numString.slice(0, half - 1)
      secondHalf = numString.slice(half, numString.length)
    }
    if (firstHalf === secondHalf.split("").reverse().join("")){ //if first half of the num is equal to reversed second half (i.o 100 === 001)
      return true
    } else {
      return false
    }
  }

  for(let i=largestNum; i > largestNum/2; i--){ //take largest result of multiplication of two 3-digits numbers and check whether this number or smaller numbers are palindromes
    if(isPalindrome(i)){
      var product = 999 //the lagest 3-digits number
      for(let j = product; j >= 100; j--){
        if(i%j === 0){ //if a palindrome divided to a 3-digits number without a remainer
          var secondProduct = i / j //find second product
          if(secondProduct.toString().length === 3){ //check if this second product has 3 digits
            return i
          }
        }
      }
    }
  }
}

console.log(largest())
