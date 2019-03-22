function smallestMultiple(){

  let i = 2520; // smallest 1-10 divisible numbers

  let found = false;

  while (found==false){
    i+= 2520;
    let isDivisible = true;

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
