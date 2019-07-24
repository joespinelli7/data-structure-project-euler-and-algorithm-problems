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

// new solution: (7 less lines of code)
// function maxChar(str) {
//   let charHolder = {};
//
//   for (let char of str) {
//     (charHolder[char] ? charHolder[char]++ : charHolder[char] = 1);
//   }
//
//   let highestValue = Object.values(charHolder).sort((a, b) => {return b-a})[0];
//   return Object.keys(charHolder).find(char => charHolder[char] === highestValue);
// }
