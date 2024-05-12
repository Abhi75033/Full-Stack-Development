export class Student{
    constructor(id,name,email){
        this.id = id
        this.name = name
        this.email=email
    }

    getData(){
        console.log('-------------------------------------');
        console.log(this.id);
        console.log(this.name);
        console.log(this.email);
    }
}