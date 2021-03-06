// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function problem009() {
  for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000 - a; b++) {
      var c = 1000 - a - b
      if (a * a + b * b === c * c) {
        return a * b * c
      }
    }
  }
}

console.log(problem009());
// Triplet is: 375, 200, 425
