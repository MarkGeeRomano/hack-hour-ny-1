/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) result.push([1]);
    else if (i === 1) result.push([1, 1]);
    else {
      let sub = [];
      for (let j = 0; j <= result[i - 1].length; j++) {
        if (j === 0) sub.push(1);
        else if (j === result[i - 1].length) sub.push(1);
        else {
          let sum = result[i - 1][j - 1] + result[i-1][j];
          sub.push(sum);
        }
      }
      result.push(sub);
    }
  }

  return result;
}

console.log(pascalTriangle(10));
// pascalTriangle(4);

module.exports = pascalTriangle;
