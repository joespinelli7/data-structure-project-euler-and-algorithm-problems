
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// Examples:
//  reverseInt(15) === 51
//  reverseInt(500) === 5
//  reverseInt(-15) === -51
//  reverseInt(-90) === -9

function reverseInt(n) {
  if (typeof n !== "number") {
    alert("Numbers only please!");
    return;
  }

  let reversedString = n.toString().split('').reverse().join('');
  return parseInt(reversedString) * Math.sign(n);
}
