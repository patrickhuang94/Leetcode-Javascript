/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var current = head;
    var next = null;
    var prev = null;
    
    while (current !== null) {
        //Need to move to next node (to the right) and change its direction
        next = current.next;
        //To move backwards, current.next has to point backwards
        current.next = prev;
        //But what is prev? Prev is the current node (head)
        prev = current;
        //Now current can no longer be head. It has to update to next
        current = next;
    }
    current = prev;
    return current;
};