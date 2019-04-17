// Write a function that accepts a positive number N. The function should console log a pyramid shape
// with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides.
// Examples:
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  (n <= 0 ? alert("Positive numbers only!") : null);
  let string = "#";
  let addToString = "##"
  let emptySpace = " ";

  for(let i = 1; i <= n; i++) {
    let numberOfSpaces = n - i;
    let counter;

    if (numberOfSpaces > 1 && i === 1) {
      console.log(emptySpace.repeat(numberOfSpaces) + string.repeat(i) + emptySpace.repeat(numberOfSpaces))
    } else if (numberOfSpaces > 1 && i > 1) {
      console.log(emptySpace.repeat(numberOfSpaces) + string + addToString.repeat(i - 1) + emptySpace.repeat(numberOfSpaces))
    } else if (numberOfSpaces === 1) {
      console.log(emptySpace.repeat(numberOfSpaces) + string + addToString.repeat(n - 2) + emptySpace.repeat(numberOfSpaces))
    } else {
      console.log(string + addToString.repeat(n - 1))
    }
  }
}
