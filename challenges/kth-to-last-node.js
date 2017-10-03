/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}
// let node = new Node(val);
function kthToLastNode(k, head) {
  let node = new Node(val);
  // get a length of the linked list
  let length = this.length;
  // declar a curr variable dn intialize it to the head
  let current = head;
  //check if number k is les than 1 or not a number, if so return undefined;
  if (typeof k !== 'number' || k < 1) return undefined;
  //iterate through the linked list, loop through until current is undefined
  while (current) {
    length += 1;
    current = current.next;
  }
  // define index of the value kth to last 
  let i = length - k;
  current = head;

  while (i) {
    current = current.next;
    i -= 1;
  }
  return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
