/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
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
var isSymmetric = function(root) {
    if (root !== null) {
        return checkSymmetry(root.left, root.right);
    } else {
        return true;
    }
};

var checkSymmetry = function(left, right) {
    //If the left or right node is null, return ........I'm not sure what's going on here??
    if (left === null || right === null) {
        return left === null && right === null;
    }
    //First checking if the left subtree's value is the same as right subtree's value 
    //Then checking for left subtree's left against right subtree's right (symmetry)
    //Also checking for left subtree's right against right subtree's left (symmetry)
    return (left.val == right.val) && checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left);
};