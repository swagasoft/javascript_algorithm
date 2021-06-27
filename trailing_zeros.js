
var trailingZeros = (n) => {
    console.log('input : ', n);
    count = 0;

    while (n > 0){
        console.log('value of n: ', n)
        n  = n/ 5;
        count += n;
        console.log('val of count after sum: ', count);
    }
    console.log('final: ', count);
    return count;
}

trailingZeros(5);