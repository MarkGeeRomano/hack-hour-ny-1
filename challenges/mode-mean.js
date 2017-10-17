/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const sorted = array.sort((a, b) => a - b);
  let mean = 0; // all values added/ total number of values and floored
  let mode = 0;
  let count = 0;

  for (let head = 0, tail = 0; head < sorted.length; head += 1) {
    mean += sorted[head];
    if (sorted[head] !== sorted[tail]) {
      if (count < ((head - tail) + 1)) {
        count = head + 1;
        mode = sorted[head];
        tail = head;
      }
    }
  }

  return Math.floor(mean / array.length) === mode;
}

module.exports = modemean;
