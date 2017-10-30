//  CS-HackHours-rotateGrid

/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

console.log("________________________________")

//init the grid matrix
function Array2D(numCols, numRows) {
  let new2dArray = [];
  for (let iRows = 0; iRows < numRows; iRows++) {
    let newMatrix = [];
    for ( let iCols = 0; iCols < numCols; iCols++ ) {
      newMatrix[iCols] = []; 
    }
    
    new2dArray.push(newMatrix);
  }
  return new2dArray;
}

function fillArray2D(array, start=0) {
  let value = start;
  for (let iRows = 0; iRows < array[0].length; iRows++) {
    for ( let iCols = 0; iCols < array.length; iCols++ ) {
      array[iCols][iRows] = value++; 
    }
  }
}

let n = 3;
let my2dArray = Array2D(n, n);
console.log("my2dArray === ", my2dArray)
fillArray2D(my2dArray);
console.log("my2dArray === ", my2dArray)

console.log("________________________________")


function rotateGrid(grid, n) {
  for (let iOuter = 0; iOuter <= grid.length - 1; iOuter += 1) {
    for (let iInner = iOuter + 1; iInner <= grid.length - 1; iInner += 1) {
      console.log("iOuter, iInner === ", iOuter, iInner);
      [grid[iOuter][iInner] , grid[iInner][iOuter]] = [grid[iInner][iOuter] , grid[iOuter][iInner]];
    }
  }
}

console.log("________________________________")
rotateGrid(my2dArray, n);
console.log("my2dArray === ", my2dArray)




module.exports = rotateGrid;
