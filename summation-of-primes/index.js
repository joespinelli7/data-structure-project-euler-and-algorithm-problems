function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}

function summationOfPrimes() {
  let sum = 2
  for(let i = 3; i < 2000000; i++) {
    if(isPrime(i)) {
      sum += i
    }
  }
  return sum
}
