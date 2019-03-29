// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(start, end) {
  let nums = helper(start, end)
  console.log(nums)
  let sum = 0
  nums.forEach(num => sum += num)
  return sum
}

function helper(start, end) {
  let ans = []
  for(let i = start; i <= end; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      ans.push(i)
    }
  }
  return ans
}
