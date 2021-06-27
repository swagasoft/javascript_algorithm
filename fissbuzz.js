

var fizzBuzz = (number) => {
    var myList = [];


    for (let index = 0; index <=  number; index++) {
        if(index % 5  == 0 && index % 3 == 0){
            myList.push("FizzBuzz");
        }else if(index % 5== 0 ){
            myList.push("Fizz");
        
        }else if(index % 3== 0 ){
            myList.push("Buzz");
        }else{
            myList.push(index);
        }

    }
       console.log('total',myList);   
       myList.forEach((num) => {
           console.log(num)
       } 
       )
   
}



fizzBuzz(15);