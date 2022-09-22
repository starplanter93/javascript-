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
                this.head = null;
                this.tail = null;
            }
            return current;
        }
        
    }
    shift(){
        //노드가 없을 경우 undefined 반환
        //노드가 있을 경우 현재의 헤드 속성을 변수에 저장
        //현재 헤드의 next노드를 가리키도록 헤드 속성을 업데이트
        //리스트의 길이를 1만큼 줄이기
        //제거된 이전 노드의 값을 반환
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail === null;
        }
        return currentHead;
    }
    unshift(val){
        //새로운 노드 생성
        //헤드가 있는지 체크, 헤드가 없다면 헤드와 테일 모두 새로운 노드를 가리키도록 한다.
        //노드가 이미 있다면, 새롭게 생성된 노드의 next를 현재의 헤드로 설정하고, 헤드가 새롭게 생성된 노드를 가리키도록 한뒤
        //리스트 길이를 1증가시킨후 마지막으로 연결된 리스트를 반환한다.
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        //인덱스가 음수거나, 리스트의 길이보다 같거나 클 경우 null반환
        //루프를 통해 인덱스가 지정하는 위치에 이를때까지 반복해서 이동한 다음 해당 위치에 있는 노드를 반환한다.
        //이동한 횟수를 추적하는 counter변수를 사용해서 while루프에서 한 것 처럼 루프내부에서 .next를 반복
        //매번 이동할때마다 counter를 증가
        //그리고 그 카운터를 리턴
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(index !== counter){
            current = current.next;
            counter ++;
        }
        return current;
    }
    
    set(index, val){
        //원하는 노드를 찾기 위해 get메서드 활용, 노드가 없을 경우에도 get이 처리할 것
        //노드를 찾지 못했다면 false 반환
        //노드를 찾았다면 해당 노드 값을 인자로 받은 값으로 업데이트하고, true 반환
        // if(this.get(index) === null) return false;
        // else{
        //     this.get(index).val = val;
        //     return true;
        // }
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        //인덱스가 0보다 작거나 리스트의 길이보다 클경우 false반환
        //이때 리스트의 길이랑 같을 경우에는 push메서드 쓰면됨.
        //맨 앞에 삽입하려거든 그냥 unshift쓰면됨.
        //새로운 노드 생성
        //삽입하려는 인덱스 위치의 앞에 있는 노드를 찾아야함 -> get(index - 1)
        //삽입하려는 인덱스의 앞에 있는 노드의 next는 삽입하려는 노드를 가리켜야함
        //새 노드를 이전의 next노드로 연결
        //길이 + 1
        //true 반환
        // if(index < 0 || index > this.length) return false;
        // if(index === 0) this.unshift(val);
        // if(index = this.length) this.push(val);
        // let newNode = new Node();
        // newNode.next = this.get(index);
        // this.get(index - 1).next = newNode;
        // this.length ++;
        // return true

        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.unshift(val);
            return true;
        }
        if(index === this.length) {
            this.push(val);
            return true;
        }
        let newNode = new Node(val);
        newNode.next = this.get(index);
        this.get(index - 1).next = newNode;
        this.length ++;
        return true;
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
list.push("!") 
list.push("<3")
list.push(":)") 

