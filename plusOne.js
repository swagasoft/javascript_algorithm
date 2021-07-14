/* Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself. */

var plusOne = function(digits) {
    
    
    let lastIndex = digits.length - 1;
    let lastValue = digits[lastIndex];

    console.log('last index', lastIndex);
    console.log('last number', lastValue);
    for(let i = digits.length - 1; i >= 0; i++){

        if(digits[i] < 9){
            digits[i]+= 1;
            return digits;
        }else{
            digits[i]= 0;
            if( digits[i -1] < 9){
            digits[i -1]+= 1;

            }else{
                digits[i -1] = 0;
            }
            console.log('final')
            return [1, ...digits];
            
        }
        
    }



};


console.log(plusOne([9,9,9]));