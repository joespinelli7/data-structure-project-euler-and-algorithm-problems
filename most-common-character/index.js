// Given a string, return the character that is most commonly used in the string.
// Examples:
// commonCharacter("abcccccccd") === "c"
// commonCharacter("apple 1231111") === "1"

function maxChar(str) {
  const charCounter = {};
  let maxC = '';
  let highestNum = 0;

  for (let char of str) {
    charCounter[char] ? charCounter[char]++ : charCounter[char] = 1;
  }

  for (let char in charCounter) {
    if (charCounter[char] === highestNum) {
      maxC = 'There is no single character used more than all others in string provided.'
    } else if (charCounter[char] > highestNum) {
      maxC = char;
      highestNum = charCounter[char];
    }
  }

  return maxC;
}

// new solution: (6 less lines of code)
// function maxChar(str) {
//   let charHolder = {};
//   let highestValue = 0;
//
//   for (let char of str) {
//     (charHolder[char] ? charHolder[char]++ : charHolder[char] = 1);
//     (charHolder[char] > highestValue ? highestValue = charHolder[char] : null);
//   }
//
//   return Object.keys(charHolder).find(char => charHolder[char] === highestValue);
// }
