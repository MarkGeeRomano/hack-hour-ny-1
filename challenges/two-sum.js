/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

let emptyArr = []

arr.reduce((prev, curr) => {
    let check = prev + check
    if(check === n) emptyArr.push(check)
})

return emptyArr

}

module.exports = twoSum;
