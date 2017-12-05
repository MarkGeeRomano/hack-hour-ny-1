/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
//if it has only one unique letter, it will be considered a palindrome
//if it has two unique letters, it will NOT be considered a palidrome

//iterate through the str value and find count the # of repetition of each letter
// store that count in an object
// if the object contains more than one property with a value of 1, return false after the loop
return Object.keys(str.split('').reduce((accm, char) => {
    if (accm.hasOwnProperty(char)) delete accm[char];
    else accm[char] = true;
    return accm;
  }, {})).length < 2;
  
}

module.exports = permPalin;