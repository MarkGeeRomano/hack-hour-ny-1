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
  const node = new Node(val);
  if (!this.head) {
    this.head = this.tail = node;
  }
  else {
    this.tail.next = node; 
    this.tail.next.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  
  let currNode = this.head;
  let keepFind = true;
  while (keepFind) {
    
    if (currNode.val === val) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      console.log("this currNode.val", currNode.val)
      return 
      keepFind = false;
      // console.log('this is new currNode.prev.next', currNode.prev.next);
      // console.log('this is new currNode.next.prev', currNode.next.prev);
    } else {
      currNode = currNode.next;
    }

  }
};


module.exports = LinkedList;
