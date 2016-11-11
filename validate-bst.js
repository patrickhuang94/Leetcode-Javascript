/**
 * Assume a BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return utilHelper(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};

var utilHelper = function(node, min, max) {
    //Base case
    if (node === null) {
        return true;
    }
    //Root value can't be less than minimum - minimum is negative infinity
    //Root value can't be greater than maximum - maximum is infinity
    if (node.val <= min || node.val >= max) {
        return false;
    }
    //Left subtree: maximum number is the root value, minimum number is negative infinity
    //Right subtree: minimum number is the root value, maximum number is infinity
    return utilHelper(node.left, min, node.val) && utilHelper(node.right, node.val, max);
}