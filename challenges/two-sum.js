/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    for (let k = i + 1 ; k < arr.length; k++) {
      let num2 = arr[k];
      if(num1 + num2 === n) return true;
    }
  }
  return false;
}


module.exports = twoSum;
