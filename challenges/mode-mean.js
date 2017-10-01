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
   var obj = {};
   var sum = 0;

   for (var i = 0; i < array.length; i++) {
     if (obj[array[i]]) {
       obj[array[i]] += 1;
     } else {
       obj[array[i]] = 1;
     }
     sum += array[i];
   }
   var maxValue = 0;
   var maxKey = 0;

   for (var key in obj) {
     if (maxValue === 0 || maxValue < obj[key]) {
       maxValue = obj[key];
       maxKey = key;
     }
   }

   var mean = Math.floor(sum / array.length);
   return Number(maxKey) === mean;
 }

module.exports = modemean;
