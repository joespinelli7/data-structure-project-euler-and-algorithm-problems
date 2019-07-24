// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

function addBinary(a,b) {
  const binaryA = a.toString(2);
  const binaryB = b.toString(2);
  const addition = (+binaryA) + (+binaryB);
  return addition.toString();
}
