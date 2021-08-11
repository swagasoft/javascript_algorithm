
// FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE

const medianOfArray = (arr)=> {
    var length = arr.length;
    
    //odd
    if(arr % 2 === 1){
        return  arr(Math.floor(length / 2));
    }else{
        return  (arr[length/2]+ arr[length / 2 -1]) / 2;
    }
}


function medianOfTwoSortedArray(arr1,arr2, pos){

    if(pos <= 0){
        return -1;
    }

    if(pos == 1){
        return (arr1[0] + arr2[0]) /2;
    }

    if(pos == 2){
        return Math.max(arr1[0], arr2[0]) + Math.min(ar1[1], arr2[1]) /2;
    }

    var median1 = medianOfArray(arr1);
    var median2 = medianOfArray(arr2);

    if(median1 == median2){
        return median2;
    }

    var eventOffset = pos % 2 == 0 ? 1: 0,
    offsetMinus = Math.floor(pos / 2) - eventOffset,
    offsetPlus = Math.floor(pos / 2) + eventOffset

      if  (median1 < median2) {
                 return  medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.
        slice(offsetMinus), offsetPlus);
            } else  {
                  return  medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.
        slice(offsetMinus), offsetPlus);
           }
}


medianOfTwoSortedArray([1 , 2 , 3 ], [4 , 5 , 6 ], 3 ); // 3.5
 medianOfTwoSortedArray([11 , 23 , 24 ], [32 , 33 , 450 ], 3 ); // 28
 medianOfTwoSortedArray([1 , 2 , 3 ], [2 , 3 , 5 ], 3 ); // 2.5
