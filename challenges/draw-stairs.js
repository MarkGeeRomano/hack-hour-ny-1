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
  // throw error if n is less than 1 or larger than 100
  if (n < 1 || n > 100) throw new Error('Input must be between 1 and 100 (both inclusive)');
  // declare an empty string
  let stairs = '';
  // declare a variable for holding the maximum width of the stairs in blank spaces
  const blankStairWidth = ' '.repeat(n);

  // loop from 1 up to and including n
  for (let i = 1; i <= n; i += 1) {
    // make a string of n length holding the number of asterisks required for current stair
    const stair = '*'.repeat(i);
    // cut max width of stairs at maxwidth.length - i and
    let fullWidthStair = blankStairWidth.slice(0, blankStairWidth.length - i);
    // concat the copy of maxwidth.length - i to string holdinng ('*' * n)
    fullWidthStair += stair;
    // add a newline character and space at the end of the current string if not n iteration
    if (i !== n) fullWidthStair += '\n ';
    // concat this string to empty str
    stairs += fullWidthStair;
  }

  // return empty string
  return stairs;
}


module.exports = drawStairs;
