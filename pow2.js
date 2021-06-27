
const calculatePower = (n , x) => {
    console.log('value of n: ', n)
    console.log('value of x: ', x)

    let ans =  1;
    if(n % 2 == 0){
        x = x * 2;
        n = n / 2;
        console.log('value of x after  cal: ' ,x)
        console.log('value of n after  cal: ', n)
    }else{
        ans =  ans * x;
        console.log('ans: ', ans);
        n = n -1;
    }
}

calculatePower(2, 14)