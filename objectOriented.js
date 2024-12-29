
class Car{

    constructor(name, color, model){
            this.name = name;
            this.color = color;
            this.model = model;
    }



    displayCarName(){
        return this.name;
    }

    displayCarModel(){
        return this.model;
    }

    displayCarColor(){
        return this.color;
    }


}


let myCar = new Car('toyota', 'red', '2020');
let brandNewCard = new Car('Nissan', 'premera', '2021');
let AbujaCar = new Car('Benz', 'C350', '2010');

console.log(myCar.displayCarName())
console.log(brandNewCard.displayCarModel())
console.log(AbujaCar.displayCarName())