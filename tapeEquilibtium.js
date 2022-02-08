

function solution(arr){
    var len = arr.length;
    var sumRight = 0;
    var sumLeft = 0;
    var ans = 0;

    
    for(let i = 1; i < len; i++){
        sumLeft = arr[0];
        sumRight += arr[i];
        ans = sumRight + sumLeft;
    }


    for(let j = 1; j < len; j++){
        if((sumRight - sumLeft ) < ans){
            ans = (sumRight - sumLeft);
             sumRight --;
              sumLeft ++;
        }else{
           
           
        }
    }

    return ans;
    
    }
    
    
    var arr = [3,1,2,4,3];
    console.log(solution(arr));
    
    