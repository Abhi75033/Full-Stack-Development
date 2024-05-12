class Message{
    constructor(sender,message){
        this.sender=sender;
        this.message=message;
        this.timestamp= new Date();
    }
    display(){
        console.log(`sender: ${this.sender} ${this.fomattime()} ${this.message}`)

  
    }
    fomattime(){
        return this.timestamp.toTimeString();
    }

}

class chatroom{
    constructor(){
        this.message=[];
    }
    sendmessage(sender,message){
        const msgobj=new (sender,message);
        this.message.push(msgobj);
        
    }
    display
}