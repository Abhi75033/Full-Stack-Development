class Mobile{
    constructor(Name,Brand,color,price){
        this.Name=Name;
        this.Brand=Brand;
        this.color=color;
        this.price=price;
    }
OutOfSctock(){
    console.log(`This phone  ${this.Name} is Currently Out of stock `);
}
    dispaly(){
        console.log(`Name: ${this.Name}`)
        console.log(`Brand: ${this.Brand}`)
        console.log(`color: ${this.color}`)
        console.log(`Price ${this.price}`)
       
    }
}

class PrimeiumMobile extends Mobile{
    constructor(Name,Brand,color,price,BatteryHealth){
        super(Name,Brand,color,price)
        this.BatteryHealth=BatteryHealth
    }

    dispaly(){
        super.dispaly()//super 
        console.log(`Bttaery Health: ${this.BatteryHealth}`)
    }
}

let M1= new Mobile('Vivo Y200','Vivo','Black',19999)
let M2= new PrimeiumMobile('Iphone 15 pro max','Apple','Gun Metal','1,50,000','100%')

console.log(M2.dispaly());