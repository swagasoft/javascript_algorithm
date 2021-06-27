
var nums = [1,2,3,4,5,6,7,8,9];

var customArray = (nums) => {
   
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        console.log('Element: ',  element);
        if(element == 5){
            nums[index] = 30;
        }
    }

    console.log('final: ', nums);
}

customArray(nums);


