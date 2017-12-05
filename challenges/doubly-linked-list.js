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

  if(!this.head) {
    this.head = node;
    this.tail = node;
  }
  else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head.value === value) {
    this.head.next.prev = null;
    this.head = this.head.next;
    return this.head;
  }
  else {
    let currNode = this.head;
    let nodeExist = true;
    while(nodeExist) {
      if(currNode.value === val) {
          if(currNode.next.value === null) {
            curr.next.next = null;
          }
          else {
          currNode.prev.next = currNode.next;
          currNode.next.prev = currNode.prev;
          nodeExist = false;
          }
      }
      else {
      currNode = currNode.next;
      }
    }
  }
};

module.exports = LinkedList;
