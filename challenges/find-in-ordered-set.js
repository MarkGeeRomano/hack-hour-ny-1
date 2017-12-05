/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// BINARY SEARCH
function findInOrderSet(arr, target) {
  if(arr.length === 1) return arr[0] === target;
  const ind = Math.floor(arr.length / 2);
  if (target > arr[ind]) return findInOrderSet(arr.slice(ind + 1, arr.length), target);
  else if (target < arr[ind]) return findInOrderSet(arr.slice(0, ind), target);
  else return true;
}


module.exports = findInOrderedSet;
