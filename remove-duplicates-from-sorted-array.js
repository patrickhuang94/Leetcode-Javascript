/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * For example, given input array nums = [1,1,2], your function should return length = 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};