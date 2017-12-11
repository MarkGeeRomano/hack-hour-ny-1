/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(arr){
  //sort largest to smallest
  arr.sort((a,b) => b - a);
  let withNegs = -Infinity;
  //calculate product of 3 largest numbers
  const largest = arr[0] * arr[1] * arr[2];
  //check if value at length - 2 is a negative number
  if(arr[arr.length - 2] < 0){
    //if so, calculate index 0 * index length - 1 * index length - 2
    withNegs = arr[0] * arr[arr.length - 1] * arr[arr.length - 2];
  };
  //math.max to get largest
  return Math.max(largest,withNegs);
};


module.exports = highestProduct;
