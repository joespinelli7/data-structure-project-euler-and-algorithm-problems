// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibonacci(n) {
  let fibArray = [0, 1];

  // let i = 2 b/c taking care of first 2 indexes ([0, 1]) of array when fibArray was created^^
  for(let i = 2; i <= n; i++) {
    let newFib = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(newFib);
  }

  return fibArray[n];
}
// can also use result[result.length - 1] to grab last element of array(desired result)

// Recursive solution:
// function fib(n) {
//   (n < 0 ? alert('Number inputted must be greater than or equal to 0') : null)
//   if(n <= 1) {return n}
//
//   return fib(n - 1) + fib(n - 2)
// }

// Memoization solution:
// passes a function (fn) into it:
// ...args takes unknown # of arguments and transforms them into an array
// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if(cache[args]) {
//       return cache[args];
//     }
//
//     const result = fn.apply(this, args);
//     cache[args] = result;
//
//     return result;
//   };
// }
//
// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//
//   return fib(n - 1) + fib(n - 2);
// }
//
// const fib = memoize(slowFib);
