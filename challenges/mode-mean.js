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
  // we will create two variable count, mean and max we will intialize value 0 to them.
  // we will iterate through the array and sum all number
  // also we we will find min and max numbers in the array
  // for mean we will find sum of all of the numbers in array and divide by length of the array
  // as we iterate throught the array we can create object property(num) and value(count)
  // we will find our mode, which is property with high count, we return our !(mean - mode === 0)
  let count = 0;
  let mean = 0;
  let max = 0;
  let obj = {};
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let sum += array[i];
    obj[array[i]] === undefined ? count++ obj[array[i]] = count : obj[array[i]] += count;
    if (count > max) {
      max = count;
      for (let key in obj) {
          mode = obj[key];
      }
    }

  }
  }
  mean = Math.floor(sum / length);
  return !(mode - mean === 0);
}

module.exports = modemean;
