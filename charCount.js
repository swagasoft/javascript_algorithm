// giving a string as input, return 

//steps
// declare object to hold return values at the end
//loop over string, for each character
// if char is a number/letter AND not in object , add it the object and set value to 1
// if char is something else (space, period, etc)  do nothing
//return object


// const charCout = (str)=> {
//     result = {}
//     for (let i = 0; i < str.length; i++) {
//         let element = str[i].toLowerCase();
//         console.log('Element ', element);
//         if(/[a-z0-9]/.test(element)){
//             if(result[element] > 0 ){
//                 result[element]++;
//             }else{
//                 result[element] = 1;
//                 console.log('result: ', result)
//             }
//         }
//     }
//     return result;
// }
// console.log(charCout('simon is a good man'))


const charCout = (str)=> {
    result = {}
    for (let char of str) {
        
        console.log('Element ', char);
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
                result[char] =  ++result[char] || 1;
                console.log('result ++ ',char +'='+ result[char]);
          
        }
    }
    return result;
}

const isAlphaNumeric = (char)=> {
var code  =  char.charCodeAt(0);
if(!(code > 47 && code < 58)  &&  //numeric 0- 9
 !(code > 64 && code < 91) &&  //upper alpha numeric A-Z
  !(code > 96 && code < 123)){  // lower alpha a-z

    return false;
  }
  return true;
};


console.log(charCout('simon is good'))