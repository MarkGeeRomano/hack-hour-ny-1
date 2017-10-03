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

  const mode = (function () {
    // number which appears most often (largest of in case of tie)
    const mode = [];

    for (let i = 0; i < array.length; i += 1) {
      if ( i === 0) mode[0] = sorted[i];
      
    }
  }());
  const mean = (function () {
    // all added values / total values floored
  }());

  return mean === mode;
}

module.exports = modemean;
