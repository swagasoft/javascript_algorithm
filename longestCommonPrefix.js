/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example one : 
 Input => [“racecar”, “scooter”, “bat”]
Output => “”

example two :
Input =>[“flowers”, “flow”, “flew”]
Output => fl*/


const longestCommonPrefix = (strs)=> {
    let prefix = "";

    if(strs === null ||  strs.length === 0 || strs[0] === "") return prefix;

    if(strs.length === 1) return strs[0];
    

    for(i = 0; i < strs[0].length; i++){
        console.log('obs',strs[0][i]);
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            console.log('see: ',strs[j][i])
          if(strs[j][i] !== char) return prefix;
            
        }
        prefix = prefix +  char;
    }

    return prefix;

}

let words = ["flower","flower","flower","flower"];
console.log(longestCommonPrefix(words));
