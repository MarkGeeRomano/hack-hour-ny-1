/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  console.log("this is this:", this);
  if (this.head === this.tail) this.head = this.tail = null;
  else if (this.tail.val === val) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }
  else if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    for (let currNode = this.head.next; currNode; currNode = currNode.next) {
      if (currNode.val === val) currNode.prev.next = currNode.next;
    }
  }
};

module.exports = LinkedList;
