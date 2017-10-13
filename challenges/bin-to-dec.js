/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 *  binToDec('0')   -> 0
 *  binToDec('11')  -> 3
 *  binToDec('100') -> 4
 *  binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  const normal = binary.split('');
  normal.pop();
  normal.reverse().join('');
  let toDecimal = Number(binary[binary.length - 1]);

  for (let count = 1; count <= normal.length; count += 1) {
    const num = normal[count - 1];
    if (Number(num)) {
      toDecimal += 2 ** count;
    }
  }
  return toDecimal;
}


module.exports = binToDec;
