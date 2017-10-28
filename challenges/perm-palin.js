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
  if (str.length === 1) return true; // a
  if (str.length === 3 && str[0] === str[2] && str[0] !== str[1]) return true; // aba  
  if (str.length === 3 && str[0] !== str[2]) return false;
  
  return permPalin(str.slice(1));
}

module.exports = permPalin;