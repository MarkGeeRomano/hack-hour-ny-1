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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let count = 0;
  const valueCache = {};
  for (let i = head; i; i = i.next) {
    count += 1;
    valueCache[count] = i.value;
  }
  return valueCache[(count - (k)) + 1];
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };


// Any place where you find yourself usimg nested loops you can be fairly certain there is a better way to solve it.
