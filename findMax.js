
const  findMax = (arr)=> {

    let max = 0;

    for( let i = 0; i < arr.length; i++){

        if(max < arr[i]){
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([1,22,3,2,3,4,2,4,6,7,8]));