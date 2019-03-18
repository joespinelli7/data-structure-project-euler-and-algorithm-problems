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
