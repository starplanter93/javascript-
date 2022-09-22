// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        //리스트에 아무것도 없을 경우 undefined 반환
        //head가 null이거나 길이가 0이면 리스트가 빈 것
        //비어있지 않을 경우 테일에 이를 때까지 전체 리스트를 따라가기
        //테일 바로 전 노드 찾기 -> 즉 테일에 이를때까지 따라가면서 이전 노드가 어떤 것이였는지 계속 추적해야함
        //마지막에서 두번째 노드의 next를 null로 설정, tail값을 마지막에서 두번째 노드로 업데이트
        //길이를 하나 감소시키고, 방금 제거한 노드를 반환-> 반환하기 위해서는 제거된 노드를 별도의 변수에 저장해놔야함
        if(!this.head){
            return undefined;
        } else {
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head === null;
                this.tail === null;
            }
            return current;
        }

    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
console.log(list);
console.log(list.pop());
console.log(list.pop());
console.log(list);


