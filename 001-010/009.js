// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function problem009() {
  // a + b + c = 1000
  // that means that
  // c = 1000 - (a + b)
  // now we can substitute C in a^2 + b^2 = c^2 by c = 1000 - (a + b)
  // a^2 + b^2 = (1000 - (a + b)) ^ 2
  // a^2 + b^2 = 1000^2 - 2*1000*(a+b)+(a+b)^2
  // a^2 + b^2 = 1000^2 - 2000 * a - 2000 * b + a^2 + 2 * a * b + b^2
  // 0 = 1000^2 - 2000 * a - 2000 * b + 2 * a * b
  // now we need to find a and b for this equation and check a + b + c = 1000

  // 1000^2 - 2000 * a - 2000 * b + 2 * a * b = 0
  // 1000^2 - 2000a - 2000b + 2ab = 0
  // 2ab - 2000a = 2000b - 1000^2
  // a(2b - 2000) = 2000b - 1000^2
  // a = (2000b - 1000^2)/2b - 2000


  var a = 0;
  var b = 0;
  var c = 1;
  while (a^2 + b^2 !== c^2){
    a = (2000 * b - 1000^2)/(2 * b - 2000)
    c = 1000 - a - b;
    b++
  }
  return {"a": a, "b": b, "c": c}

}

console.log(problem009());
// The pythagorean triple is 375, 200, 425, and the sum is 1000
