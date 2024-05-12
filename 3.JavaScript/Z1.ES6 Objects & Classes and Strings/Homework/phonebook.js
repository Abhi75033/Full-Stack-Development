class phone{
    constructor(Name,phoneNo){
        this.Name=Name;
        this.phoneNo=phoneNo;
        this.date= new Date()
    }
    dispay(){
        console.log(`${this.Name} your phones no. are ${this.phoneNo} ${this.date}`)
    }
// formatDate(){
//     return this.date.toLocaleDateString;
// }
}

class phonebook{
    constructor(){
         this.phones=[]
    }

   contacts(Name,phoneNo){
const phoneobj=new phone(Name,phoneNo);
this.phones.push(phoneobj);
this.dispayConatcts()
    }

    dispayConatcts(){
        this.phones.forEach((item)=>item.dispay())
    }
}

let no = new phonebook();

no.contacts('Abhishek','+916394753801')


