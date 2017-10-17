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
  const check = { '{':'}','[':']','(':')' }
  const cache = [];
  for (let i = 0; i < input.length; i++) {
    val = input[i];
    if(val in check) cache.push(val);
    else if(val === ']' || val === '}' || val === ')')
      if(check[cache.pop()] !== val) return false
    }
  }
  return !cache.length;
}

module.exports = balancedParens;
