// Write a function that accepts a positive number N. The function should console log a step shape
// with N levels using the # character.  Make sure the step has spaces on the right hand side!
// Examples:
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  (n <= 0 ? alert("Only positive numbers allowed!") : null)
  let step = '#';
  let space = ' ';

  for(let i = 1; i <= n; i++){
    let numOfSpaces = n - i;
    if(numOfSpaces < n) {
      console.log(step.repeat(i) + space.repeat(numOfSpaces));
    } else {
      console.log(step.repeat(i));
    }
  }
  
}
