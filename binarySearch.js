/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let first = 0;
    let last = nums.length - 1
    
    while (first <= last) {
        let mid = Math.floor(((first + last) / 2))
        if(nums[mid] < target) {
            first = mid + 1
        }
        else if(nums[mid] > target) {
            last = mid - 1
        }
        else {
            return mid
        }
        }
    return -1;
        
 };

 console.log(search([-1,0,3,5,9,12],9));