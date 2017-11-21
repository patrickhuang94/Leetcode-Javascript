/**
  *	Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
  *	Find all the elements of [1, n] inclusive that do not appear in this array.
  */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
    var missingArray = []

    for (var i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            missingArray.push(i)
        }
    }

    return missingArray

};
