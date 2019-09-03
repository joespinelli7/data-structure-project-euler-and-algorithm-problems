// Write a function: function solution(array); that, given an array array of N integers, returns the smallest positive
// integer (greater than 0) that does not occur in array. For example, given array = [1, 3, 6, 4, 1, 2], the function
// should return 5. Given array = [1, 2, 3], the function should return 4. Given array = [−1, −3], the function should
// return 1. Write an efficient algorithm for the following assumptions: N is an integer within the range [1..100,000];
// each element of array array is an integer within the range [−1,000,000..1,000,000].

function smallestPositiveInteger(array) {
  let posIntArr = array.filter(int => int > -1 );
  let smallestIntArr = [];

  if (posIntArr.length === 0) {
    return 1;
  }

  for(let i = 1; i < posIntArr.length; i++) {
    if(posIntArr[i] - posIntArr[i-1] != 1) {
      let posInt = posIntArr[i] - 1;
      smallestIntArr.push(posInt);
    }
  }

  if (smallestIntArr.length === 0) {
    return Math.max(...posIntArr) + 1;
  } else {
    return Math.max(...smallestIntArr);
  }

}

// function solution(array) {
//     const answerArray = array.reduce((a,b)=>{
//         if (b < 0) {
//             return a;
//         }
//         a[b] = b;
//         return a
//     }, [])
//     if (answerArray.length === 0 ) {
//         return 1;
//     }
//     for (let i=1; i <answerArray.length; i++){
//        if (!(answerArray[i])) {
//            return i;
//         }
//     }
//     return answerArray.length;
// }
