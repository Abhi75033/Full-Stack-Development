class car{
    constructor(name,ModeNo,color){
    this.name=name;
    this.ModeNo=ModeNo;
    this.color=color;

    }
    display(){
        console.log(`Name: ${this.name}`)
        console.log(`Model No: ${this.ModeNo}`)
        console.log(`Color: ${this.color}`)
        console.log('--------------------------');

    }
}

class ElectricCar extends car{
    constructor(name,ModeNo,color,batterycapacity){
        super(name,ModeNo,color)
        this.batterycapacity=batterycapacity;
    }

    charge(){
        console.log(`${this.name} charging.....`)
    }
}

let c1= new car('Tata Nexon',2022,'Black');
let c2= new ElectricCar('Mercdriez Benz',2023,'white','100km/h')
c1.display()
c2.charge()