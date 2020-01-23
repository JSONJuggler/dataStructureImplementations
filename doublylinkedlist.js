class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  pop() {
    var oldTail = this.tail;
    if (!this.head) {
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    } else {
      var previous = this.tail.prev;
      previous.next = null;
      this.tail = previous;
      this.length--;
      return oldTail;
    }
  }
}
