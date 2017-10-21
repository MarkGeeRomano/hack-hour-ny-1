/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  function Node(val) {
    this.value = val;
    this.next = null;
  }

  let largest = new Node(-Infinity);
  let length = 0;
  const stack = {};

  return {
    push(input) {
      // if input is larger than largest.value ...
      if (input > largest.value) {
        // make a new node with input as argument
        const node = new Node(input);
        // make input's .next equal to largest
        node.next = largest;
        // set largest be input
        largest = node;
      }
      // set stack[length] to input
      stack[length] = input;
      // add +1 to length
      length += 1;
      // return length
      return length;
    },
    pop() {
    // subtract 1 from length;
      length -= 1;
      // if largest.value and stack[length] are equal ...
      if (largest.value === stack[length]) {
        // set largest to largest.next
        largest = largest.next;
      }
      const value = stack[length];
      // remove stack[length] (delete maybe?)
      delete stack[length];
      // return the value that was just removed
      return value;
    },
    getMax() {
      return largest.value > -Infinity ? largest.value : null;
    },
  };
}

module.exports = Stack;