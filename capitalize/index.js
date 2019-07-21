// Write a function that accepts a string.  The function should capitalize the first letter of each word
// in the string then return the capitalized string.
// Examples
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  })
  .join(' ');
}

// alternative solution:
// function capitalize(str) {
//   const capArr = str.split(' ');
//   let capSentence = '';
//   let finalArr = [];
//
//   for(let element of capArr) {
//     let firstChar = element.slice(0, 1).toUpperCase();
//     let restOfStr = element.slice(1);
//
//     let newStr = firstChar + restOfStr;
//     finalArr.push(newStr);
//   }
//   return finalArr.join(' ');
// }
