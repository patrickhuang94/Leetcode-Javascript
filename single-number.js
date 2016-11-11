/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //Sort arrays first
    nums.sort();
    
    var i;
    for (i = 0; i < nums.length; i++) {
        //Since it's sorted, nums[i] should equal nums[i+1]; if it's equal, skip over the next iteration of i
        if (nums[i] === nums[i+1]) {
            i++;
        }
        //If not equal, that's the odd one out - return that number in array
        else {
            return nums[i];
        }
    }
};