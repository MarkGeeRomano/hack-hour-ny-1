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
    this.head;
    let nodeNum =0;
    //iterate from head towards the end to get how many nodes (nodeNum)
    for (let i = head.next; i; i = i.next) {
        nodeNum++;
        //iterate from head towards the end, for every iteration,
        //get the last node, make it the head of a new linkedList;
    }

    //then decrement nodeNum to get the next last and make it head of a new linkedList (while loop)
    while(nodeNum >= 0) {
        for (let i = nodeNum; )
    }
    //return this.head of newLinkedList
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
