/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
// pointer for the current node 
// pointer for the rest of the LL 
// pointer for the prev node 
    let current = head
    let next;
    let prev = null;
// while loop --> until current.next is null 
    while (current) {
        next = current.next;
        current.next = prev; 
        prev = current;
        current = next; 
    }

    return 
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
