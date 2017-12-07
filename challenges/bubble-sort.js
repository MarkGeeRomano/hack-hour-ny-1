// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let lastInd = array.length;
  while (lastInd > 0) {
    for (let i = 0; i < lastInd; i += 1) {
      if (array[i] > array[i + 1]) {
        [ array[i], array[i + 1]] = [ array[i + 1], array[i]];
      }
    }
    lastInd--;
  }
  return array;
}

module.exports = bubbleSort;
