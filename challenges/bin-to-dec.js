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
  var digits = binary.split('');
  var powers = digits.length;
  var base = 2;
  var sum = 0;

  if (digits[0] === 1) {
    digits[0] = 1;
  }

  for (var i = 0; i < powers; i++) {
    var currBase = base *= 2
    if (Number(digits[powers - (i + 1)]) === 1) {
      Number(digits[powers - (i + 1)]) = currBase;
    }
  }

  for (var k = 0; k < digits.length; k++) {
    if (digits[k]) {
      sum += digits[k];
    }
  }

  return sum;
}

module.exports = binToDec;
