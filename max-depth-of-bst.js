/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
var maxDepth = function(root) {
    if (root === null) {
      return 0;
    } else {
    	//Math.max takes the largest of the two numbers
    	//Compute maxDepth() on both children, and whichever had the higher one, return + 1
    	//If tree looked like 3 then left subtree = 2, 2 + 1 = 3
    	//                   / \
    	//                  2   4
    	//                 / \ / \
    	//                1
      return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
};