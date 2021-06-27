var arr = [1,3,5,8,12,34,35];
target =  1;

var search = (arr, target)=> {
    var left = 0;
    right = arr.length - 1;
    console.log('right', right);
    console.log('left', left);

 
    while (left <= right){
        console.log('count.. r', right);
        console.log('count l', left);
        let mid = (left + right) / 2;
        console.log('MIddile ', mid)
        console.log('arr of mid ', arr[mid])
        if(arr[mid]  == target){
            console.log('result',mid);
            return mid;
        }else if( target > arr[mid]){
            console.log('addin')
            left =  mid + 1;
        }else{
           
            right = mid - 1;
            console.log('removing from mid', right);
        }
    }



    console.log('ss ', -1);
    return -1;
}

search(arr, target);