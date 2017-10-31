//  CS-HackHours-Queue-from-2Stacks

/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor (){
    this.array = [];
    this.length = 0;
  }
  
  push (element) {
    this.length += 1;
    this.array.push(element);
  }
  
  pop () {
    if (this.length) {
      this.length -= 1;
      return this.array.pop();
    }
    else {
      return undefined;
    }
  }
}


/**
* Queue Class
*/


class Queue {
  constructor () {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }
  
  enqueue (element) {
    this.inputStack.push(element);
  }
  
  dequeue () {
    if (this.inputStack.length === 0 && this.outputStack.length === 0) {
      return undefined;
    }
    else {
      if (this.outputStack.length === 0) {
        // for (let iMove = 0; iMove < this.inputStack.length; iMove += 1) {
        while ( this.inputStack.length ) {
          this.outputStack.push( this.inputStack.pop() );
        }
      }
      return this.outputStack.pop();
    }
  }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log("myQueue === ", myQueue);
console.log("myQueue.dequeue() === ", myQueue.dequeue());
console.log("myQueue === ", myQueue);
myQueue.enqueue(5);
myQueue.enqueue(6);
console.log("myQueue === ", myQueue);
console.log("myQueue.dequeue() === ", myQueue.dequeue());
console.log("myQueue.dequeue() === ", myQueue.dequeue());
console.log("myQueue.dequeue() === ", myQueue.dequeue());
console.log("myQueue.dequeue() === ", myQueue.dequeue());
console.log("myQueue.dequeue() === ", myQueue.dequeue());
console.log("myQueue.dequeue() === ", myQueue.dequeue());



module.exports = {Stack: Stack, Queue: Queue};
