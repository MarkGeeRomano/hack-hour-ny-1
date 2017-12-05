/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 * //buffer is the intermediate object to assist your solution
 */

 //Asks sorted 
//always ask if it's a singly linked list or doubly linked list
//
//saves time complex for cache (looped once) and nested looped saves space complex
function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  //Nexted for loops are n factorial
for(let i = head; i ; i = i.next) {
  for(let j = i.next; j; j = j.next) {
    if(i.value === j.value) {
      jLast.next = j.next;
      return head;
      }
    jLast = j;
    };
  };

}



module.exports = deleteDups;
