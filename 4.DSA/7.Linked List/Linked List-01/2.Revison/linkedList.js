//Step 1 = we have to create node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }

      curr.next = newNode;
    }
  }
  // We have to delete the node
  /* To delete the node there are three cases
  case1: If list is empty
  case2: If list have only one node
  case3: If list have multiple nodes
  */
 deleteNode(){
    let curr = this.head
    if(this.head == null){
        console.log('The list is empty, there is nothing to delete');
    }else if(curr.next == null){
        this.head = null
        console.log('Last Node is deleted successfully, Now List is empty');
    }else{
        while(curr.next.next != null){
            curr=curr.next
        }
        curr.next = null
        console.log('Deleted successfully');
    }
 }
  printList(){
    let curr = this.head
    while(curr != null){
        console.log(curr.data);
        curr = curr.next
    }
  }
}

let LL= new Linkedlist()
LL.append(1)
LL.append(2)
LL.append(3)
LL.printList()
LL.deleteNode()
LL.printList()
LL.deleteNode()
LL.printList()
LL.deleteNode()
LL.printList()
LL.deleteNode()
LL.printList()