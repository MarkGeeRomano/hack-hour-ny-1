// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



// function bubbleSort(array) {
//   let lastInd = array.length;
//   let swapped = true;
//   let count = 0;
//   while (swapped && lastInd > 0) {
//     swapped = false;
//     for (let i = 0; i < lastInd; i += 1) {
//       count++;
//       if (array[i] > array[i + 1]) {
//         console.log(`Swapped: ${array[i]} => ${array[i+1]}`);
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         swapped = true;
//       }
//       // console.log(array[i]);
//     }
//     lastInd--;
//   }
//   console.log(count);
//   return array;
// }
function bubbleSort(array) {
  let lastInd = array.length;
  let count = 0;
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < lastInd; i += 1) {
      count++;
      if (array[i] > array[i + 1]) {
        // console.log(`Swapped: ${array[i]} => ${array[i+1]}`);
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
      // console.log(array[i]);
    }
    lastInd--;
    console.log(array);
  } while (swapped && lastInd > 0);
  console.log(count);
  return array;
}

// [38,39,40,41]
// bubbleSort([41,36,37,38, 39,40]);
// bubbleSort([1,2,3]);
// bubbleSort([]);

module.exports = bubbleSort;
