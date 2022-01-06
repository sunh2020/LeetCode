/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {     // Binary search
                               // 1,2,3,4,5 // n=5, bad=4 // output = 4
        let start = 1         // start with 1
        let end = n         // end is n because we do set the exact number

        while(start < end) {                                      // while start is less than end
            const mid = start + Math.floor((end - start) /2)      // middle number is start number + ((end number - start number) /2) 
                                                                  // if just mid = start + (start + end) / 2, it will overflow   
            if(isBadVersion(mid)){                                // if middle number is a badversion,
                end = mid                                         // then end number is the middle number
            } else {                                               
                start = mid + 1                                   // if middle is not a bad version, start number is equal to middle number + 1
            }
        }
        return start;                                              // if not met all, then return start number
        
    };
};

