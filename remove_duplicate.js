var list = [1,1,1,1,2,2,5,5,5,6,7]
// var removeDuplicates = (nums)=> {
//     console.log(nums);
//     var org = [];

//  var i = 0;
//  for (let j = 0; j < nums.length; j++) {
//      console.log('looping... ', j)
//      console.log('nums -i ', nums[i])
//      console.log('nums -j ', nums[j])
//      if(nums[i] != nums[j]){
//          i++;
//          nums[i]  = nums[j];
//          org.push(nums[j])

//     console.log( 'total', nums);
//          console.log('set nums: '+ nums[j] );
//      }
       
//      }
//      console.log( 'final',i  + 1);
//      console.log( 'numbers', nums);
//  }

// removeDuplicates(list);


const removeDuplicate = (array)=> {
        console.log(array);

        let point1 = 0;
        var dub = [];

        for (let j = 1; j < array.length; j++) {
   
           if(array[point1]  !== array[j]){
            point1++;
            array[point1] =  array[j];
           }else{
               dub.push(array[j])
           }

         
            
        }

        console.log()
        console.log('final...', dub);
        console.log('final...array', array);
}

console.log(removeDuplicate(list));
