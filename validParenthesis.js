
var isValid = function(s){
    bracket = {
        '(':')',
        '[':']',
        '{':'}'
    }

    let heap = []

    for(char in s){
        if(bracket[char]){
            heap.push(bracket[char])
        }
    }
}