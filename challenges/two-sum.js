/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const cache = {};
  for (var i = 0; i < arr.length; i++) {
    cache[arr[i]] = n - arr[i];
    if (cache[arr[i]] === arr[i]) return true;
  }

  return false;
}

module.exports = twoSum;
