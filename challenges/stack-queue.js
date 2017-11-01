/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  var storage = [];

  this.push = function() {
      storage.push.apply(storage, arguments);
  };
  this.pop = function() {
      return storage.pop.apply(storage, arguments);
  };
  this.size = function() {
      return storage.length;
  };
  this.peek = function() {
      return storage;
  };
}

/**
* Queue Class
*/





function Queue() {
  var inner = new Stack();
  var outer = new Stack();

  this.eneque = function() {
      inner.push.apply(inner, arguments);
  };
  this.dequeue = function() {
      if (outer.size() === 0) {
          while (inner.size())
              outer.push(inner.pop());
      }
      return outer.pop();
  };
  this.size = function(){
    return inner.size() + outer.size();
  };
  this.peek = function() {
      return outer.peek();
  };
}
module.exports = {Stack: Stack, Queue: Queue};
