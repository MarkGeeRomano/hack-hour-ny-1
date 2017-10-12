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
  //create map
  const map = {'{':'}', '[': ']', '(':')'}
  //make a cache
  const cache = [];
  //loop through input[i]
  let val;
  //set a var to input[i]
  for (let i = 0; i < input.length; i++) {
    input[i]
  }
  // if val is in map
    //if yes, push to cache
  //else if val is equal to a right brackets  
    //pop cache, check that val to see if it matches
      //if not, return false
  // if lenght cahche > 1 return false, else true;


  // const lefty = '([{';
  // const righty = ')]}';
  // const obj = {'(':')', '[':']', '{':'}'};
  // var newArr = [];
  //
  // for (var i = 0; i < input.length; i++) {
  //   if (lefy.indexOf(input[i]) > -1 || righty.indexOf(input[i]) > -1) {
  //     newArray.push(input[i]);
  //   }
  // }
  //
  // if (newArr.length % 2 !== 0) {
  //   return false;
  // }
  //
  // for (let k = 0; k < str.length; k++) {
  //   if (str[k] === ')' || str[k] === ']' || str[k] === '}') {
  //     return false;
  //   }
  // }
  //
  //
  //
  // return true;

}




module.exports = balancedParens;
