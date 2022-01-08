/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let result = [];
   
    let left = 0;                     // Left and right pointer
    let right = nums.length - 1;
    
    let pointer = right;             // Position to add squared number to nums
    
    while (left <= right) {          // Add the higher number to the array and then decrease the pointer
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[pointer--] = nums[left++] ** 2;
        } else {
            result[pointer--] = nums[right--] ** 2;
        }
    }

    return result;
};


console.log(sortedSquares([-4,-1,0,3,10]));