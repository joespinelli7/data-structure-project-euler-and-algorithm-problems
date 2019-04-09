// Given a string, return the character that is most commonly used in the string.
// Examples:
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function commonCharacter(str) {
  let characterCounterObject = {};
  let largestNum = 0;
  let mostCommonChar = "";

  for (let char of str) {
    (!characterCounterObject[char] ? characterCounterObject[char] = 1 : characterCounterObject[char]++)
  }

  for (let char in characterCounterObject) {
    if (characterCounterObject[char] > largestNum) {
      largestNum = characterCounterObject[char];
      mostCommonChar = char;
    }
  }
  return mostCommonChar
}
