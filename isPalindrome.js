
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
//  var isPalindrome = function(x) {
    
//     const str = String(x);
    
//     for (let i = 0, j = str.length - 1; i < j ; i++ , j--){
//         console.log("i " + str[i] + " === " + str[j])
//         if(str[i] !== str[j]){
//             return false;
//         }
//     }
//     return true
// };


var isPalindrome = function(x) {
    
        const str = String(x);
        
        for (let i = 0, j = str.length - 1; i < j ; i++ , j--){
            if(str[i] !== str[j]){
                return false;
            }
        }
        return true
    };

    console.log(isPalindrome("tacocat"))