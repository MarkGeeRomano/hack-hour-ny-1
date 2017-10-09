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

// function binToDec(binary) {
//   // var digits = binary.split('');
//   // var powers = digits.length;
//   // var base = 2;
//   // var sum = 0;
//   //
//   // if (digits[0] === 1) {
//   //   digits[0] = 1;
//   // }
//   //
//   // for (var i = 0; i < powers; i++) {
//   //   var currBase = base *= 2
//   //   if (Number(digits[powers - (i + 1)]) === 1) {
//   //     Number(digits[powers - (i + 1)]) = currBase;
//   //   }
//   // }
//   //
//   // for (var k = 0; k < digits.length; k++) {
//   //   if (digits[k]) {
//   //     sum += digits[k];
//   //   }
//   // }
//   //
//   // return sum;
// }

function binToDec(binary) {
 var digits = binary.split('');
 // var digits;
 // console.log(newArr)
 //
 // for (var m = 0; m < newArr.length; m++) {
 //   if (newArr[m] === 1) {
 //     break;
 //     console.log('1 found')
 //   }
 // }
 //
 // console.log(newArr[m]);
 var powers = digits.length;
 var sum = 1;
 var acc= 0;



 for (var i = 0; i < powers; i++) {
   var currBase = Math.pow(sum, 2);
   sum += currBase;
  //  if (Number(digits[powers - (i + 1)]) === 1) {
  //    digits[powers - (i + 1)] = currBase;
  //  }
 //}
 //
 // for (var k = 0; k < digits.length; k++) {
 //   if (digits[k] !== '0') {
 //     sum += digits[k];
 //   }
 // }

 return sum;
}

module.exports = binToDec;
