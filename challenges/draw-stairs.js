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
    // set a count to export to helpers; countSpace = n -1 (n--); countStar = 1; 1++
    // write a loop to reflect n "stories" of * // i < (n * n) -1;

    // and every time index is % n, skip a line.

    // helper function to create spaces // closures

    //helper function to create * // closures;

    //
  var countSpace = n-1;
  var countStar = 1;

  for (var i = 0; i < n; i++) {
    spaceCreator(n, countSpace, countStar);
    countSpace--;
    countStar++;
  }

}


function spaceCreator(n, countSpace, countStar) {

  var str = '';

  for (var j = 0; j < countSpace; j++) {
    str += ' ';

  }
  for (var k = 0; k < countStar; k++) {
    str+= '*';

  }
  console.log(str);
}

module.exports = drawStairs;
