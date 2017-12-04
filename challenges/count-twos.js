// Write a function "countTwos" that takes a number as an argument, num. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  // console.time('time complexity')
  let numCount = 0
  for(let i = 0; i <= num; i += 1) {
      let numStr = i + ''
      // console.group('%c First level', 'background: #222; color: #bada55', i);
    if((numStr).indexOf('2') > -1) {
      for(let j = 0; j < numStr.length; j += 1) {
        // console.group('Second level', numStr[j]);
        if(numStr[j] === '2')
        numCount += 1
      }
    }
  }
  console.timeEnd('time complexity')
  return numCount
}

module.exports = countTwos;