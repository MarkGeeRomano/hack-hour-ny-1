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

// NOTES:
//
// 1. If you can find the length. Length - k === number of iterations to get to value;



function Node(val) {
  this.value = val;
  this.next = null;
}

// function kthToLastNode(k, head) {
//   for (var i = this.head; i; i = this.next) {
//     if (this.next.this.next === null) {
//       return this.value;
//     }
//   }
// }

//FIRST APPROACH
// function kthToLastNode(k, head) {
//   //calculate the length;
//   let len = 0;
//   // start
//   var currNode = head;
//   //use forLoop if current reaches null (reached the end of the loop);
//   // initialization, condition, final statement;
//   for (; currNode;currNode = currNode.next) {
//     len++
//   }
//   console.log('The list has', len, 'nodes');
//   currNode = head;
//   for (let i = 0; i < len - k; i++) {
//     currNode = currNode.next;
//   }
//   return currNode.value;
//
// }

//SECOND APPROACH
function kthToLastNode(k, head) {
  //initialize slow and fast node.
  let slowNode = head;
  let fastNode = head;

  for (let i = 0; i < k; i++) {
    fastNode = fastNode.next;
  }

  while (fastNode) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }

  return slowNode.value;

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
