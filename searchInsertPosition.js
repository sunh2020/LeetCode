/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
                                                             // nums = [1,3,5,6], target = 5 > output: 2 means [2] = 5 
    let start = 0, end = nums.length                       // start number 0 means start with index 0 which is number 1
                                                            // end number is nums.lenght which means 4 because there are 4 numbers in array
                                                             
    while(start < end) {                                    // while start is smaller than end number   0 < 4
        const mid = start + Math.floor((end - start) / 2)    // middle number is start + ((end - start) / 2) 
        if(nums[mid]===target) {                             // if middle middle number is exactly same as target   
           return mid                                        // return middle number
        } else if(nums[mid] > target){                       // else if middle number is bigger than target      
            end = mid                                      // then end number is equal to middle number 
        } else {                                             // else start number equal to middle number + 1
            start = mid + 1
        }
    }
    return start                                              // if not met all, return start number   
};

console.log(searchInsert([1,3,5,6],2));