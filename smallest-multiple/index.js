// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(){
  let i = 2520; // smallest 1-10 divisible numbers
  let found = false;

  while (found==false){
    i+= 2520;
    let isDivisible = true;
    //b/c 11-20 is divisible by same numbers as 1-10
    for(let j=11; j<=20; j++){
      console.log(i, j)
      if (i%j != 0){
        isDivisible = false;
        break; // break out of the for loop, continue while loop incrementing i by 2520
      }
    }
    if(isDivisible == true){
      found = true;
    }
  }
  return i;
}
