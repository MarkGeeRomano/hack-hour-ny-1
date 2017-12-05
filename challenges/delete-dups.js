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
 */



function deleteDups(head) {
  let slow = head;
  let fastprev = head;
  let fast = head.next;
  while (slow) {
    if (!fast) {
      slow = slow.next;
      fast = slow.next;
    }
    if (slow.value === fast.value) {
      fastprev.next = fast.next;
    }
    fastprev = fast;
    fast = fast.next;
  }
}

module.exports = deleteDups;
