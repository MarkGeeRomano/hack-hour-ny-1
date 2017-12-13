// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let temp;
  let count = array.length - 1;
  let i = 0;
  while (count !== 0) {
    if (array[i] > array[i + 1]) {
      if (i !== (array.length - 1)) {
        // [i, i + 1] = [i + 1, i];
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }

    // if not at the end
    i += 1;
    if (i === (count)) { // if we're at the last index (i + 1)
      i = 0;
      count -= 1;
    }
  }
  return array;
}

module.exports = bubbleSort;
