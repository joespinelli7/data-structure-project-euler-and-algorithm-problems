// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// Examples:
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function arrayChunk(array, size) {
  let chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    let subArr = array.slice(index, index + size);
    chunkedArray.push(subArr);
    index += size;
  }
  return chunkedArray;
}

// this solution also sorts the numbers by lowest to highest inside the sub arrays:
function chunk(array, size) {
  let chunkedArray = [];
  let index = 0;

  while(index < array.length) {
    let subArray = array.sort((a, b) => {return a - b}).slice(index, index + size);
    chunkedArray.push(subArray);
    index += size
  }

  return chunkedArray;
}
