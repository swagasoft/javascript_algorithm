var nums  = [2,7,11,15];
var target  = 9;


 twoSum  = (nums , target)=> {
  
var  myMap = new Map();

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log('Element: ', element);
    console.log('index: ', i);
    let result  = target  - element;
    if(myMap.has(result)){
      console.log('SS', [myMap.get(result), i]);
      return;
    }else{
        console.log('Setting', element + ' '+ i);
        myMap.set(element, i);
    }
}
console.log('Allll',myMap)
}
twoSum(nums, target);
    
    
