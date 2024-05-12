class Message {
  constructor(Sender, message) {
    this.Sender = Sender;
    this.message = message;
    this.timestamp = new Date();
  }
  display() {
    console.log(`Sender: ${this.Sender}  ${this.message} ${this.fomatTime()} `);
  }

  fomatTime() {
    return this.timestamp.toLocaleTimeString();
  }
}


class chatroom{
    constructor(){
this.messagess=[]
    }
    
    sendmessage(sender,message){
const msgobj = new Message(sender,message)
this.messagess.push(msgobj)
this.displaychat()
    }

    displaychat(){
      console.clear();
this.messagess.forEach((item)=>item.display())
    }

}

let chat =new chatroom();

chat.sendmessage('Abhishek','Hii Bro')
chat.sendmessage('Kumal','i am fine how are you');
chat.sendmessage('Abhay','hii all of you')


