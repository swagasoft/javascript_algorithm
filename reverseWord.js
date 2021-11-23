
/* Giving an input string s, reverse the order of the words.
Return a string of the word in reverse order concatenated by single space. */

const reverseWord = (str)=> {
    let stringOneWordArr = str.split(" ");
    // temp array to hold reverse stirng.
    let reverseWord = [];
    // itterate the loop backward
    for ( let i = (stringOneWordArr.length)- 1; i >= 0; i--){
        //pushing the reverse word into an array
        reverseWord.push(stringOneWordArr[i]);

    }
    // join the word array
    return reverseWord.join(" ")
}

let str1 = "Javascript is Best";
console.log(reverseWord(str1))