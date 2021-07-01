


const countDown = (num)=> {
    if(num < 1){
        console.log('all done!');
        return;
    }else{
        console.log(num);
        num--;
        countDown(num);
    }

 
}

console.log(countDown(50))