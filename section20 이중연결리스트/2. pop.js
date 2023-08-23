/**
 * 1. 리스트가 비었다면, undefined 리턴
 * 2. 그렇지 않다면, 현재의 tail을 저장 -> 나중에 리턴하기 위함.
 * 3. 만약 길이가 1이라면, head와 tail을 모두 null로 설정
 * 4. 현재 tail의 이전 노드를 새 tail로 설정
 * 5. 새 tail의 next를 null로 설정, 이전 tail의 prev도 null로 설정
 * 6. 길이를 1 줄이고, 제거한 노드를 리턴
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
