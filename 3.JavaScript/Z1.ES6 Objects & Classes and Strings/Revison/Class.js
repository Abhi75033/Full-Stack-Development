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


let M1= new Mobile('Vivo Y200','Vivo','Black',19999)
let M2= new Mobile('Realme 8s 5G','Realme','Grey',23999)

console.log(M1)
console.log('-----------------------');
console.log(M1.dispaly())

M2.OutOfSctock();

