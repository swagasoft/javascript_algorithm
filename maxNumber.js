
// The largest item in an unsorted array

const largestNum = ( arr)=> {
    let max = 0;

    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    return max;
}

console.log(largestNum([,20,6,4,0,9,7,8,5]));