function isPalindrome(num) {
  var palin = parseInt(num.toString().split('').reverse().join(''))
  if (palin === num) {
    return true
  } else {
    return false
  }
}

function largestPalindromeProduct() {
  let x = 100
  let y = 100
  let product
  let palinArray = []

  for (x; x < 1000; x++) {
    for (y = x; y < 1000; y++) {
      product = x * y
      if (isPalindrome(product)) {
        palinArray.push(product)
      }
    }
  }
  return Math.max(...palinArray)
}
