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
  let toDecimal = 0;
  let power = 1;

  for (let count = binary.length - 2; count >= 0; count -= 1) {
    const num = Number(binary[count]);
    if (num) {
      toDecimal += num * (2 ** power);
    }
    power += 1;
  }

  return toDecimal + Number(binary[binary.length - 1]);
}

module.exports = binToDec;
