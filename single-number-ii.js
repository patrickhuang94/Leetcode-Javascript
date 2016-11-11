/**
 * Given an array of integers, every element appears three times except for one. Find that single one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //Sort array first
    nums.sort();
    
    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i+1] && nums[i+1] == nums[i+2]) {
            //Skip to next set of numbers if all 3 are equal
            i += 2;
        } else {
            return nums[i];
        }
    }
};