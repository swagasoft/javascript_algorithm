
function groupAnagram(strList){
let result = {};

    for(let i = 0; i < strList.length; i++){
        const hash = strList[i].split('').sort().join();
        result[hash] =  result[hash] || []
        result[hash].push(strList[i])
    }

    return  Object.values(result);
}

let list  = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagram(list))