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

function merge(left, right) {

}
