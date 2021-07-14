/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var nums  = [2,7,11,15];
var target  = 9;


 twoSum  = (nums , target)=> {
  
var  myMap = new Map();

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let result  = target  - element;
    if(myMap.has(result)){
      return  [myMap.get(result), i];
    }else{
        myMap.set(element, i);
    }
}
}

console.log(twoSum(nums, target));
    
    
