


const axios = require('axios').default;
axios.get('https://coderbyte.com/api/challenges/json/rest-get-simple').then(({data})=> {
//     console.log('see ', data['hobbies'])

    var hobbies = data['hobbies'];
    // var hobbies = ['running',' painting']
    var token =  'tcoegs21346';
    hobbies = ""+hobbies;

   var result = ""
   
    for (i in hobbies){
        if(hobbies[i] && token[i]){
            result += hobbies[i] + token[i]
        }else if(hobbies[i] && !token[i]){
            result += hobbies[i]
        }else if(!hobbies[i] && token[i]){
            result += token[i]
        }else{
            console.log('EXTRA ', i)
        }
    }


    console.log('FINAL ', ""+result);


})

