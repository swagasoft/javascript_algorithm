

// IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH

const arraySlice = (array, beginIndex, endIndex) => {
console.log('begin idx '+beginIndex, 'endIndex '+endIndex)
    // if pramameter passes, retunr the array
    if(! beginIndex &&  !endIndex){
        return array;
    }

    // if only beginIndex is found, set endIndex to size
    if(beginIndex && !endIndex){
        endIndex = array.length;
    }
   

    var  partArray = [];

    // If both begin and end index specified return the part of the array
for  (var  i = beginIndex; i < endIndex; i++ ) {
    console.log(i)

      partArray.push(array[i]);
     }

      return  partArray;
}

console.log(arraySlice([1 , 2 , 3 , 4 ], 1 , 2 ))

let list = [1 , 2 , 3 , 4 ];
console.log(list.slice(1,2))