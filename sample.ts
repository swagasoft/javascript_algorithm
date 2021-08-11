
/* Problem: Given the array arr, find and return two indices of the array that add up to weight
or return -1 if there is no combination that adds up to weight. */

let array1 = [1,2,3,4,5];
let target = 9;

// const addUp = (arr, target)=> {

//     for(let i = 0; i < arr.length; i++){
        
//         for(let j = 1; j < arr.length ; j++){
//             if(arr[i] + arr[j] == target){
//                 return [i,j];
//             }

            
//         }
//     }
//     return -1;
// }

// console.log(addUp(array1, target))

const findSumBetter = (arr , target)=> {
    var hashTable = {};
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];

        var differences =  target -  element;

        if(hashTable[element] != undefined){
            return [i, hashTable[target - element]];
        }else{
            console.log(hashTable)
            hashTable[differences] = i;
        }
    }

    return -1;
}




console.log(findSumBetter(array1, target));