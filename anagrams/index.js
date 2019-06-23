// Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it
// uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case
// Examples:
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False

// first attempt:
// function anagrams(stringA, stringB) {
//   let newStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   let newStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//
//   let finalStringA = newStringA.split('').sort().join('');
//   let finalStringB = newStringB.split('').sort().join('');
//   return finalStringA === finalStringB;
// }

//better (revised) version:
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
