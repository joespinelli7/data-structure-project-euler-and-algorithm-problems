// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// Examples:
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function arrayChunk(array, size) {
  let chunkedArray = [];

  for (let element of array ) {
    let last = chunkedArray[chunkedArray.length - 1];
    if(!last || last.length === size) {
      chunkedArray.push([element])
    } else {
      last.push(element)
    }
  }
  return chunkedArray
}
