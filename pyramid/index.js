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

// Improved solution:
function pyramid(n) {
  n > 0 ? null : alert("Positive numbers only!");
  let hash = '#';
  let space = ' ';

  for (let i = 1; i <= n; i++) {
    let numOfSpaces = n - i;

    if (numOfSpaces === n - 1) {
      console.log(space.repeat(numOfSpaces) + hash.repeat(i) + space.repeat(numOfSpaces));
    } else if (numOfSpaces > 0 ) {
      console.log(space.repeat(numOfSpaces) + hash.repeat((i * 2) - 1) + space.repeat(numOfSpaces));
    } else {
      console.log(hash.repeat((n * 2) - 1));
    }
  }

}

// Old solution:
// function pyramid(n) {
//   (n <= 0 ? alert("Positive numbers only!") : null);
//   let string = "#";
//   let addToString = "##";
//   let emptySpace = " ";
//
//   for(let i = 1; i <= n; i++) {
//     let numberOfSpaces = n - i;
//
//     if (numberOfSpaces > 1 && i === 1) {
//       console.log(emptySpace.repeat(numberOfSpaces) + string.repeat(i) + emptySpace.repeat(numberOfSpaces))
//     } else if (numberOfSpaces > 1 && i > 1) {
//       console.log(emptySpace.repeat(numberOfSpaces) + string + addToString.repeat(i - 1) + emptySpace.repeat(numberOfSpaces))
//     } else if (numberOfSpaces === 1) {
//       console.log(emptySpace.repeat(numberOfSpaces) + string + addToString.repeat(n - 2) + emptySpace.repeat(numberOfSpaces))
//     } else {
//       console.log(string + addToString.repeat(n - 1))
//     }
//   }
// }
