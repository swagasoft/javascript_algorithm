

const binarySearch = (arr, target)=> {

    let start = 0;
    let end  = arr.length - 1;
    let middle  =   Math.floor((start +  end) / 2);
    let loop  = 0;

    while(arr[middle] !== target && start <= end){
        loop += 1;
        if(target < arr[middle]){
            end =  middle  - 1;
        }else{
            start =  middle + 1;
        }
        middle  =  Math.floor((start +  end) / 2);
    }

    return arr[middle] === target ? middle  : -1;

}

console.log(binarySearch([1,3,4,5,7,8,9,10,12,13,14,15], 14));