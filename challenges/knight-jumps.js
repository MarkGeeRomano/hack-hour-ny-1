// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function insideBoard(position) {
  return (position >= 1 && position <= 8);
}

function knightjumps(str) {
  let x = Number(str[1]), y = Number(str[3]);
  return [-1, -2, 1, 2].reduce((moves, offset, i, arr) => {

    if (insideBoard(x + offset)) {
      if (insideBoard(y + arr[(i + 1) % arr.length])) {
        moves++;
      }
    }

    if (insideBoard(x + arr[(i + 1) % arr.length])) {
      if (insideBoard(y + offset)) {
        moves++;
      }
    }

    return moves;
  }, 0);
}
module.exports = knightjumps;
