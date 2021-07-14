
/*
You can use an additional parameter to search after a certain index in a string.
An example is counting occurrences of certain letters . In the following example, the
occurrences of the character 'a' will be counted: */

const stringOccur = (stringVal, target)=> {
let count = 0;
var pos = stringVal.indexOf(target);
console.log('pos',pos)

while (pos !== -1) {
    count++;
    pos = stringVal.indexOf(target, pos + 1);
}
console.log(target + 'occurs '+ count + " times")

}

 var str  = "He's my king from this day until his last day";
console.log(stringOccur(str, 'h'))



