function isPrime(num) {
  //checks if num can be divided by any even numbers its false except 2
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return num
}

function findPrime(number) {
  let primeArray = [2]
  // primeArray.length < number b/c we need an array with length of 10,000 b/c that would be the 10,001st prime
  // i+=2 b/c no even numbers are prime numbers
  for(let i = 3; primeArray.length < number; i+=2) {
    if (isPrime(i)) {
      primeArray.push(isPrime(i))
    }
  }
  return primeArray[primeArray.length - 1]
}
