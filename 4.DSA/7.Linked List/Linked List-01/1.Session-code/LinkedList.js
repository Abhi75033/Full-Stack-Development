class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // Method to add a node to the end of the list 
    append(data){
        let newnode = new Node(data);

        if(this.head==null){ //if linked list is empty
            this.head = newnode;
        }
        else{
            let curr = this.head;
            while(curr.next != null){
                curr = curr.next;
            }
            //now curr is last node
            curr.next = newnode;
        }
    }

    printList(){
        let curr = this.head;
        while(curr != null){
            console.log(curr.data);
            curr = curr.next;
        }
    }

   hasCycle(){
    let curr = this.head
    let move = curr.next
    let set = new Set()

    while(move.next!=null && curr.next!=null){
        let sum = curr.data+move.data
        if(sum==0){
          curr = curr.next
        }else{
            set.add(curr.data)
            set.add(move.data)
            curr = curr.next
        }
    }
console.log(set);
    }
}

let LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(-3)
LL.append(3)
LL.append(1);
//LL.printList();
LL.hasCycle()
