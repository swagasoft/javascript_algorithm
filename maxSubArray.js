

const maxSubArraySum = (arr, num)=> {

   let maxSum = 0;
   let tempSum = 0;

   if(arr.length < num)  return null;

   //capture the first three element in an array
   for (let i = 0; i < num; i++) {
       maxSum += arr[i];
       console.log('max sum: ', maxSum);
   }
   tempSum = maxSum;

   for (let i = num; i < arr.length; i++) {
       const element = arr[i];
       console.log('element: ', element);
       console.log('fff: '+ arr[i - num] +" - "+ arr[i])
       tempSum = tempSum - arr[i - num]  + arr[i];
       console.log('new temp', tempSum);
       maxSum = Math.max(maxSum, tempSum);
       
   }
   return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,8,1,5,6,3], 3))