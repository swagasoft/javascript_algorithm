

const bubbleSort = (arr)=> {
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j ++){

            if(arr[j]  > arr[j + 1]){
                let swap = arr[j];
                arr[j] =  arr[j+1];
                arr[j + 1]  = swap;
            }
        }
    }

    return arr;
}


console.log(bubbleSort([5,4,3,7,0,9,8,1,2]));