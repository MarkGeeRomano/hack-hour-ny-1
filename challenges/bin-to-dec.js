/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let binArr = binary.split(``);
  let dec = binArr.reduce(function(acc, val, ind, arr) {
    return (val === '1') ? acc + Math.pow(2, arr.length-1-ind) : acc + 0;
  }, 0);
  return dec;
}

module.exports = binToDec;
