


const axios = require('axios').default;
const fs = require('fs')
var crypto =  require('crypto')

axios.get('https://coderbyte.com/api/challenges/json/age-counting').then(({data})=> {
    // console.log('see ', data)

var writeStream = fs.createWriteStream('./output.txt')

    var counter = 0;
    respData = data.data.split(',')
   
    var myOutput = '';

   
    for (let data of respData ){
        var split_data = data.split("=");
        if ( split_data[0].trim()  == 'age' && parseInt(split_data[1]) == 32){
            counter += 1;
        }
        myOutput += split_data + '\n';

        
    }
    myOutput  += '\n';

    writeStream.write(myOutput, 'utf8')
    var hash = crypto.createHash('sha1');
    hash.update(myOutput)

    console.log('PRINT ', counter);
    console.log('output ', myOutput);
    console.log('hash ', hash.digest('hex'));


    // for (let i = 0; i < respData.length; i++){
    //    var age = respData[i]
    //     var ageSplit = (age.split('='));
        
    //     if (ageSplit[1] == '32'){
    //         ageFound[ageSplit[0]] = ageSplit[1];
    //         counter += 1;
    //         myOutput += ageSplit +" \n"
    //     }
    // }


    // console.log('PRInt ', myOutput);

 
})

