let student ={
    id:1,
    name:'Abhishek',
    email:'abhishek@gmail.com',
    output:function(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.email);
    }
}

module.exports=student