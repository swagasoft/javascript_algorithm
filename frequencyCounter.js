//task
// input  a = [...] , b = [...]



// process
// 1. a function with two array
// return true if a[value] == b = [value ^ 2]  else false;
//  a = [value.length] must  === b[b.value.length]

// const sameData = (arr1, arr2)=> {
// if(arr2.length !==  arr1.length){
//     return false;
// }

// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     console.log(element);
//     console.log('dd ', arr2.indexOf(arr1[i]  ** 2))
//     let correctIndex =  arr2.indexOf(arr1[i]  **2);

//     if(correctIndex === -1){
//         return false;    
//     }
//     arr2.splice(correctIndex, 1)
    
// }
// return true;

// }

// let a1 = [1,2,3], b2 = [4,1,9];
// console.log(sameData(a1, b2));

const sameData = (arr1, arr2)=> {
    if(arr2.length !==  arr1.length){
        return false;
    }
    


    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for( let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        console.log('dd',frequencyCounter1[val])
    }

    for( let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1 ){
        if(!frequencyCounter1[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
    
    }
    
    let a1 = [1,2,3], b2 = [4,1,9];
    console.log(sameData(a1, b2));