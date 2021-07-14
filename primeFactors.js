
function primeFactors(n){
    while(n%2 == 0){
        console.log(2);
        n = n/2;
    }
}
console.log(primeFactors(10));