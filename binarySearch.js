/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     // set variable first number and last number
    let first = 0;
    let last = nums.length - 1
    
    while (first <= last) {    // while first is less and equal to last
        let mid = Math.floor(((first + last) / 2))   // middle number is the largest integer value 
                                                     //that is less than or equal to a number of (first number + last number) /2
        
        if(nums[mid] < target) {      // if array of mid number is less than target 
            first = mid + 1           // then first number is equal to middle number + 1 (move to right side of middle)
        }
        else if(nums[mid] > target) {  // else if array of mid number is bigger than target
            last = mid - 1             // then last number is equal to middle number - 1 (move to left sift of middle)
        }
        else {
            return mid   // else, return middle number
        }
        }
    return -1;           // if not all, then return -1
        
 };

 console.log(search([-1,0,3,5,9,12],9));