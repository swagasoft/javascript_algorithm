
const selectionSort = (arr)=> {
    for(i = 0; i < arr.length; i++){

        var lowest = i;
        for(j = i + 1; j < arr.length; j++){
            console.log(arr[i], arr[j]);
            if(arr[j] < arr[lowest]){
                lowest  = j;
            }
        }
       
       
      if(i !== lowest){
        console.log(arr);
        console.log('before swap');
        let temp  =  arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        console.log('after swapping...');
        console.log(arr);
        console.log('--------------------------');
      }
      
    }
    return arr;
}



console.log(selectionSort([0,2,34,22,10,19,27]));