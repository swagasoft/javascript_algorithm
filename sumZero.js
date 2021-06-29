

const sumZero = (arr)=> {
    let left  = 0;
    let right = arr.length - 1;
console.log('right :', right)
    while (left < right) {
        let sum = arr[left] + arr[right];
        console.log('r ', arr[right]);
        console.log('le', arr[left]);
        if(sum === 0){
            return  [arr[right], arr[left]];
        }else if(sum > 0 ){
            console.log('sum > 0', sum);
             right--;
             console.log('curr r ', right)
        }else{
            left++;
            console.log('curr left', left);
        }


    }
}


console.log(sumZero([-20,-1-2,3,4,5,6,7,8]))