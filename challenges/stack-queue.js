/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;
}
Stack.prototype.push = function(val) {
  this.storage[this.length++] = val;
  return this.length;
}
Stack.prototype.pop = function() {
  const val = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return val;

}


/**
* Queue Class
*/


function Queue() {
  this.in = new Stack();
  this.out = new Stack();

}

Queue.prototype.enqueue = function(val) {
  this.in.push(val);
}

Queue.prototype.dequeue = function() {
  let popped = this.in.pop();
  while (popped) {
    this.out.push(popped);
    popped = this.in.pop();
  } 
  return this.out.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
