


const axios = require('axios').default;
axios.get('https://coderbyte.com/api/challenges/json/json-cleaning').then(({data})=> {
    console.log('see ', data)

var customData = cleanHelper(data);
    var editHobbies = cleanHelper(customData['hobbies']);
    var editEdu = cleanHelper(customData['education']);
    var editName = cleanHelper(customData['name']);


    customData['hobbies']  = editHobbies;
    customData['education']  = editEdu;
    customData['name']  =  editName;


    console.log('FINAL RESULT',  JSON.stringify(customData))
})


function cleanHelper(someData){
    for (i in someData){
        if(someData[i] === '' || someData[i] === "N/A" || someData[i] === '-'){
            if(someData.length){
                someData.splice(i, 1)
            }else{
                delete someData[i]
            }
        }
    }

    return someData;
}