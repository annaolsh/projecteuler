// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestNumber() {

  function isDevisible(num){ //checks whether a particular number is evenly divisible by all of the numbers from 1 to 20
    var noRemainer = true
    var counter = 20
    while(counter > 0 && noRemainer === true){
      if(num % counter === 0){
        counter-=1
      } else {
        noRemainer = false
      }
    }
    return noRemainer
  }

  var result;
  var num = 20
  while (!result){
    if(!isDevisible(num)){
      num +=20
    } else {
      result = num
    }
  }
  return result
}
