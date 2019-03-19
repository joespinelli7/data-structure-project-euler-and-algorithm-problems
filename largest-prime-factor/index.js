function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return num
}

function largestPrimeFactor(number) {
  let primeArray = []
  for(let i = 2; i < number; i++) {
    if(isPrime(i) != false && number % isPrime(i) === 0) {
      let primeNumber = isPrime(i)
      primeArray.push(primeNumber)
    }
  }
  return Math.max(...primeArray)
}
