// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const result = [0, 1];

  // let i = 2 b/c taking care of first 2 indexes [0], [1] of array when declaring const result
  for(let i = 2; i <= n; i++) {
    const prevNum1 = result[result.length - 1];
    const prevNum2 = result[result.length - 2];

    result.push(prevNum1 + prevNum2);
  }
  return result[n];
}
// can also use result[result.length - 1] to grab last element of array(desired result)

// Recursive solution:
// function fib(n) {
//   (n < 0 ? alert('Number inputted must be greater than or equal to 0') : null)
//   if(n <= 1) {return n}
//
//   return fib(n - 1) + fib(n - 2)
// }
