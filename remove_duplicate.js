var list = [1,1,3,3,5]
var removeDuplicates = (nums)=> {
    console.log(nums);

 var i = 0;
 for (let j = 0; j < nums.length; j++) {
     console.log('looping... ', j)
     console.log('nums -i ', nums[i])
     console.log('nums -j ', nums[j])
     if(nums[i] != nums[j]){
         console.log('inc i  by: '+ i);
         i++;
         nums[i]  = nums[j];

    console.log( 'total', nums);
         console.log('set nums: '+ nums[j] );
     }
       
    
     }
    
     console.log( 'final',i  + 1);
   
     
 }


removeDuplicates(list);