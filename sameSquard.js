
// Write a function called sameSquared which accepts two arrays
// The function should return true if every value in the first 
//array has its corresponding value squared in the second array
// The frequency of the values must be the same


const sameSquared = (arr1, arr2) => {
    let main = [3,5,7];


    if(!arr1 ||  !arr2) return false;

    if(arr1.length !==  arr2.length)  return false;

    let lookUp = {};

    for(value of arr1){
        lookUp[value * value]  = (lookUp[value * value] || 0) + 1;
        console.log(lookUp);
    }

    return true;
}

console.log(sameSquared([1,2,3,3,4,4], [1,4,9,9,16,16]));