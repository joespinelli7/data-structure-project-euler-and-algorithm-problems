
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// Examples:
//  reverseInt(15) === 51
//  reverseInt(500) === 5
//  reverseInt(-15) === -51
//  reverseInt(-90) === -9

function reverseInt(n) {
  let stringN = n.toString()
  let reversed = stringN.split('').reverse().join('')
  if (reversed.includes("-")) {
    return -parseInt(reversed)
  } else {
    return parseInt(reversed)
  }
}
