/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 let rotate = function(nums, k) {
    nums.unshift(...nums.splice(- (k % nums.length)));
};

