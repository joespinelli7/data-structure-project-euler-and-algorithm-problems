function sumSquares() {
	let sum = 0
	for(let i = 1; i <= 100; i++) {
		let number = i * i
		sum += number
	}
	return sum
}

function squareSum() {
	let sum = 0
	for(let i = 1; i <= 100; i++) {
		sum += i
	}
	return Math.pow(sum, 2)
}

squareSum() - sumSquares()
