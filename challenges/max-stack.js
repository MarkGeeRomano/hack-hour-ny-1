/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
}

//let newStack = new Stack;
// let max = null?;

Stack.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
}

Stack.pop = function(value) {
  let popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return popped;
}

Stack.getMax = function() {
  // let max = null
  // for (let i = )
}

module.exports = Stack;