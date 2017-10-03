/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
// we will declare and emplty string
var stairs = '';
  for (var i = 0; i <= n; i++) {
    stair += '*';
    console.log(stair);
  }
// we will iterate from beginning to n
//for each iterating we will use push or/and unshift to add star to build our staircase
// we will return our string

}


module.exports = drawStairs;
