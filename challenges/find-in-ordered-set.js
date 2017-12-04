/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
//  Binary Search (Has to be an ordered set)
//  Helper function
//  Find the middle index
//  Chck if value at middle index is === target ? return true
//  Check if the start index === end? return false
//  recursive call to helper function (know the value at mid thus minus 1 or plus 1)
//  check value of the arr[middle] and target, to determine params to pass in
//return binsearch
}


module.exports = findInOrderedSet;
