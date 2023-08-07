/**
 * 1. pop은 어떤 변수나 데이터를 인자로 받아들이지 않음.
 * 2. 리스트의 마지막 요소를 리턴함.
 * 3. 리턴할 요소가 없으면 undefined를 리턴함.
 * 4. 테일 바로 전 요소를 계속 따라가면서, 이전 요소를 기억하고 있어야함.
 * 5. 뒤에서 두 번째 요소에 도착하면, 그 요소를 테일로 설정한다.
 * 6. 리스트의 길이를 1 줄이고, 맨 마지막 요소를 반환한다.
 */

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
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let pre = current;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
