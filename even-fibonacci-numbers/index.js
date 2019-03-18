let num1 = 1;
let num2 = 2;
let sum = 0;

while( num1 < 4000000) {

    if( num1 % 2 === 0){
        sum += num1;
    }

    //update a and b through each while iteration, ex 1st iteration through:
    let num3 = num1 + num2; // 3 = 1 + 2
    num1 = num2; // 1 = 2, now
    num2 = num3; // 2 = 3, now
}

console.log(sum)
