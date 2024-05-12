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

let c1= new car('Tata Nexon',2022,'Black');
let c2= new car('Mercdriez Benz',2023,'white')
c1.display()
c2.display()