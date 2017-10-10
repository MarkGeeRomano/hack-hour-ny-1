/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const sorted = array.sort((a, b) => a - b);
  let mean = 0; // all values added/ total number of values and floored
  let mode = sorted[0]; // largest most repeated value
  let check = mode;
  let count = 0; // count for mode
  for (let i = 0; i < sorted.length; i += 1) {
    mean += sorted[i];
    if (mode === sorted[i]) {
      counter += 1
    } else {
      
    }
  }

  return Math.floor(mean / sorted.length) === mode;
}

module.exports = modemean;
