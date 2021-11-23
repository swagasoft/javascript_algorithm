function LongestWord(sen) { 

    // code goes here  
  
  var wordStr = arr = sen.match(/[a-z0-9]+/gi);
  var longest = [];
  
  for(var i = 0; i <  wordStr.length; i++){
    if(wordStr[i].length > longest.length){
      longest = wordStr[i];
    }
  }
  
    return longest + ""; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));