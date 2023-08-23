/**
 * 1. value를 갖는 새로운 노드 만들기
 * 2. 헤드가 null이거나 길이가 0이라면 헤드와 테일로 새 노드를 지정
 * 3. 리스트에 다른 노드가 있다면, 현재 테일을 찾아서 테일의 next속성을 새 노드로 설정
 * 4. 새 노드의 prev속성을 이전 테일 노드로 설정
 * 5. 테일을 새 노드로 바꿔주기
 * 6. 길이를 1늘이고 전체 리스트를 출력.
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
}
