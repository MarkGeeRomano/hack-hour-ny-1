// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let position = [Number(str[1]), Number(str[3])];
  let offset = [-1, -2, 1, 2];
  let moves = 0
  for (let i = 0; i < offset.length; i += 1) {
    if (position[0] + offset[i] >= 1 && position[0] + offset[i] <= 8) {
      let y = position[1] + offset[(i + 1) % offset.length];
      if (y >= 1 && y <= 8) moves++;
    }

    if (position[1] + offset[i] >= 1 && position[1] + offset[i] <= 8) {
      let x = position[0] + offset[(i + 1) % offset.length];
      if (x >= 1 && x <= 8) moves++;
    }
  }
  return moves;
}

module.exports = knightjumps;
