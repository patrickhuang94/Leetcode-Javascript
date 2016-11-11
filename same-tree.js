/**
 * Given two binary trees, write a function to check if they are equal or not.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == q) {
        return true;
    } 
    //Edge case for null trees
    else if (p === null || q === null) {
        return false;
    }
    //Make sure the values in p and q are the same
    //Only return true if values in p and q are the same, and recurse through left and right nodes of tree
    return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};