// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

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
