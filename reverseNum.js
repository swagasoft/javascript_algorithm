
const reverseNum = (num)=> {
    let ref = 0;
    while(num > 0){
        ref = ref * 10 + num % 10;
        console.log('ref..'+ ref);
        console.log('num..1', num/10);
        num = Math.floor(num/10);
        console.log('num..', num);
    }

    return ref;
}

console.log('final ', reverseNum(149));