/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a,b) => (b-a))
  let negs = - Infinity;
  let pos;
  if (array[array.length-2] < 0) {
    negs = array[0] * array[array.length-2] * array[array.length-1];
  }
  pos = array[0] * array[1] * array[2];
  return Math.max(negs, pos);
}


// function highestProduct(array) {
//   if (!Array.isArray(array) || array.length < 3) {
//     return 0;
//   }
//   let product = null;
//   for (let i = 0; i < array.length; i++) {
//     let num1 = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       let num2 = array[j];
//       for (let k = j + 1; k < array.length; k++) {
//         let num3 = array[k];
//         let currProd = num1 * num2 * num3
//         if (product === null || currProd > product) {
//           product = currProd;
//         }
//       }
//     }
//   }

//   return product;
// }





module.exports = highestProduct;
