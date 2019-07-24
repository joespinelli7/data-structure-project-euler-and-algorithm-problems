// Given a string, return the character that is most commonly used in the string.
// Examples:
// commonCharacter("abcccccccd") === "c"
// commonCharacter("apple 1231111") === "1"

function maxChar(str) {
  let characterCounter = {};
  let highestN = 0;
  let maxC = "";

  for (let char of str) {
    (characterCounter[char] ? characterCounter[char]++ : characterCounter[char] = 1)
  }

  for (let char in characterCounter) {
    if (characterCounter[char] > highestN) {
      highestN = characterCounter[char];
      maxC = char;
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
