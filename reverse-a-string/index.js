//Reverse a string

function reverseString(string) {
  return string.split('').reverse().join('')
}

//using no built in methods
function reverse(str) {
  let reversed = "";

  for(let character of str) {
    reversed = character + reversed
  }
  return reversed;
}
