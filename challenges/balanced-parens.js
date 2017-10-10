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

function balancedParens(input) {
  const left = { '[': true, '{': true, '(': true };
  const right = { ']': true, '}': true, ')': true };
  let count = 0;
  let posNeg = true;

  for (let i = 0; i < input.length; i += 1) {
    if (left[input[i]]) {
      count += 1;
      if (!posNeg) return false;
    }

    if (right[input[i]]) {
      count -= 1;
      posNeg = false;
    }
  }

  return !count;
}

module.exports = balancedParens;
