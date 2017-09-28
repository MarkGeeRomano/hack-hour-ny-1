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
    const spacerString = '\xa0'.repeat(n);
        // NOTE:  can't use ' ', because console.log will trunc leading spaces to one space
        //          therefore, you need to use a non-breaking space '\xa0'
    const stairsString = '*'.repeat(n);
  	// console.log("spacerString[" + spacerString.length + "] === " + JSON.stringify(spacerString));
  	// console.log("stairsString[" + stairsString.length + "] === " + stairsString);
    for (let i = 1; i <= n; i++) {
        console.log(spacerString.substr(0,n-i).concat(stairsString.substr(n-i)));
    }
}

//drawStairs(6);

module.exports = drawStairs;

//  cd\!Geo\!Development\CodeSmith\HackHours