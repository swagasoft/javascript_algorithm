
const countUpDown = (n)=> {
    console.log(' going up');

    for (let i = 0; i < n; i++) {
        console.log('up: ', i)
        
    }

    console.log('At the top \n  Going down')

    for (let j =  n - 1; j >= 0 ; j--) {
        console.log('down: ', j)
    }

    console.log('Back down. bye')
}

console.log(countUpDown(10))