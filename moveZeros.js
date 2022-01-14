/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let count = 0; // Count of non-zero elements 
 
                     // Traverse the array. If element encountered is non- 
                    // zero, then replace the element at index 'count' 
                   // with this element 
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] !== 0) {           // When the number of index is not zero
             nums[count++] = nums[i]; // here count is incremented 
        }
    } 
              
       for (i = count; i < nums.length; i++) { // When i is same as count
        console.log(i)                    // console.log i 
        nums[i] = 0                       // number of i index is same as zero 
    }
 }


