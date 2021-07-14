
/* write a function  that reverse a string. The input 
is giving as an array of characters char[]. */

const reverseString = (str)=> {

    left = 0;
    right = str.length - 1;

    while( left < right){
        let temp = str[left];
        str[right] = temp;
        left++;
        right--;
    }
    return str;
}

let list = ['h','e','l','l','o']
console.log(reverseString(list))