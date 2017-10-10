/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  input = input.replace(/\w/g, ''); // keeps all non-word letters
  const cache = {
    '(': 0,
    ')': 0,
    '[': 0,
    ']': 0,
    '{': 0,
    '}': 0,
  };
  const chars = '()[]{}';
  for (let i = 0, b = input.length - 1; i < Math.floor(input.length/2); i++) {
    if (cache[input[i]]) cache[input[i]]++;
    if (cache[input[b]]) cache[input[b]]++;
    b--;
  }

  for (key in cache) {
    if (cache[key] > 0) {
      switch (cache[key]) {
        case '('
      }
    }
  }



}

module.exports = balancedParens;
