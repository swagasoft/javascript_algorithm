/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    
    const value = [1000, 900, 500, 400,100, 90, 50,40, 10,9, 5, 4, 1 ]            
const symbol = ["M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

var myResult = ''

for(let i=0; num; i++){
    var valueTarget = value[i]
    var symbolTarget = symbol[i]
    
    //  keep on filtering the the giving number till you find your result.
    while(num >= valueTarget){
        num -= valueTarget
        myResult += symbolTarget
    }
}
  
  return myResult;

};

console.log(intToRoman(3))