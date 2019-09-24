// Implement bubbleSort, selectionSort, and mergeSort.

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // here, saying we believe i is lowest index in array so if not prove me wrong in the following code.
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      // checks IF array at index of j is less than our previously assumed lowest index, update indexOfMin
      // to that j value (b/c its the new lowest).
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      // here, arr[indexOfMin] points to the absolute lowest value.
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {

}

// merge 2 sorted arrays(left, right) into 1 sorted array.
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // shift() will forcibly remove that element from the array and push it into results array.
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // Joins any remaining elements from either left or right array to results array values.
  // either left or right will be empty by the time the while loop ends so this is just to return
  // any left over values from whichever array is not empty.
  return [...results, ...left, ...right];
}
