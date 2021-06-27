
const {performance} = require('perf_hooks');

const addUpTo = (n)=> {
    let total = 0;

    for(let i = 0 ; i <= n; i ++){
        console.log(i)
        total +=  i;
    }

    console.log('final',total);
    return total;
}

var t1 = performance.now();
addUpTo(10000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
