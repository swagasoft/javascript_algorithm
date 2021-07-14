
var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" .split("");
console.log('disciona '+ DICTIONARY );

const encodeId = (num)=> {
    var base = DICTIONARY.length;
    console.log('base '+ base);
    var encode = "";

    if(num === 0){
        return DICTIONARY[0];
    }

    while(num > 0){
        encode += DICTIONARY[(num % base)];
        num = Math.floor(num / base);
    }

    return reverseWord(encode);
}


const reverseWord = (str) => {
    var reversed = "";

    for (i = str.length - 1; i >= 0; i--){
        reversed  += str.charAt(i);
    }
    return reversed;
}

function decodeId(id){
    var base = DICTIONARY.length;
    var decoded = 0;

    for (var index = 0; index < id.split("").length; index++){
        decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
    }

    return decoded;
}

console.log(encodeId(11231230 ));
console.log(decodeId('VhU2' ));