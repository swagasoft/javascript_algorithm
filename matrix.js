const matrix = (rows, columns) => {
    var jaggedArr = new Array(rows);
    console.log('jagged ', jaggedArr);
    for(var i =1; i < columns; i+= 1){
        jaggedArr[i] = new Array(rows);

        console.log('@nd jadded', jaggedArr);
    }
    return jaggedArr;
}

console.log(matrix(3,3));