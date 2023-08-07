class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

/**
 * 1. 새 값을 받으면 그 값을 리스트의 맨 뒤에 추가.
 * 2. 만약 리스트가 비어있다면 head와 tail로 설정하기.
 * 3. 만약 리스트가 비어있지 않다면, 마지막 노드의 next를 새롭게 생성된 노드를 가리키도록 하기.
 * 4. tail과 length를 바꿔주기.
 * 5. 변경된 것 리턴하기.
 */

let list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');

console.log(list);
