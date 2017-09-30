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

// mode = most repeated
// mean = average
function modemean(array) {
  let cache = {};
  let sum = 0;
  array.forEach(function(ele) {
    sum += ele;
    if (!cache[ele]) cache[ele] = 1;
    else cache[ele]++;
  });

  let max;
  for (let key in cache) {
    if (cache[key] > cache[max] || !max) max = key;
    if (cache[key] === cache[max] && key > max) max = key;
  }

  let avg = Math.floor(sum/array.length);
  return Number(avg) === Number(max) ? true : false;
}

module.exports = modemean;
