//Reverse a string

function reverseString(string) {
  return string.split('').reverse().join('')
}

//using no built in methods
function reverseString(string) {
  let final = ""
  for (let i = string.length - 1; i >= 0; i--) {
    final += string[i]
  }
  return final
}
