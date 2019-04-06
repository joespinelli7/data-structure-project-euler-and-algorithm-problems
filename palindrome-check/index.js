// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindomeChecker(string) {
  //regular expression
  // (/)signifies start of regex expression, [\W] bracket with \W matches all non-alphanumeric values,
  // added _ after \W to match underscores as well, /g global refers to the whole string
  let regex = /[\W_]/g

  //replace takes in 2 arguments, first is pattern you want to match (reg here) and 2nd is what you want
  //to replace it with "" (nothing) b/c you want to remove those characters from string
  let regexString = string.toLowerCase().replace(regex, "")
  let palin = regexString.split('').reverse().join('')
  if(palin === regexString) {
    return true
  } else {
    return false
  }
}
