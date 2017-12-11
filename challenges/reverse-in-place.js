'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlacePoorly(arr){
  //iterate through arr backward, push value at i to end
  let val;
  for(let i = arr.length - 1; i >= 0; i--){
    //set var to val at i, then push
    val = arr[i];
    arr.push(val);
  };
  //we can use splice to trim off the first half of our original array and return the second half
  return newArr = arr.splice(arr.length / 2);
};

function reverseInPlaceGoodly(arr){
  //set a number = half of our arr.length to determine number of times need to iterate through
  const until = Math.floor(arr.length / 2);
  //iterate through until
  let left,right;
  for(let i = 0; i < until; i++){
    //store the mirrored values
    left = arr[i];
    right = arr[arr.length - 1 - i];
    //set the value at the mirrored indexes to their mirrored value
    arr[i] = right;
    arr[arr.length - 1 - i] = left;
  };
  return arr
};


module.exports = reverseInPlace;
