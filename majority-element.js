/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //Make sure array is sorted first
    nums.sort();
    
    //Majority of odd length arrays (7/2 = 3.5 = 3, majority has to be > 3)
    var majority = Math.floor(nums.length / 2);
    var count = 1;
    
    for (var i = 0; i < nums.length - 1; i++) {
        count++;
        //Reset count if current num !== next num
        if (nums[i] !== nums[i+1]) {
            count = 1;
        }
        //As soon as the count of a certain number > majority, break and return
        if (count > majority) {
            break;
        }
    }
    return nums[i];
};