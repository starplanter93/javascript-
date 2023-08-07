/**
 * 1. 추가하려는 노드의 값을 인자로 받음
 * 2. 인자로 받은 값을 가진 노드 생성
 * 3. 리스트에 요소가 없다면 생성한 노드를 헤드와 테일로 설정
 * 4. 리스트에 요소가 있다면 생성한 노드의 next를 현재 헤드로 설정
 * 5. 새로운 헤드를 새로운 노드로 지정.
 * 6. 길이를 1 증가시키고, 리스트를 리턴.
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
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
