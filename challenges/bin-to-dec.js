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
   if (binary.length === 1 && Number(binary[0]) === 1) return 1;
   else if (binary.length === 1 && Number(binary[0]) === 0) return 0;
   else if (binary.length > 1 && Number(binary[0]) === 0) return binToDec(binary.slice(1));
   else {
     let total = Number(binary[0]);
     if (total === 0) return 0;
     total *= Math.pow(2, (binary.length - 1));
     return total + binToDec(binary.slice(1));
   }
 }

module.exports = binToDec;
