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
      var newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      oldTail.prev = null;
      this.length--;
      return oldTail;
    }
  }
  shift() {
    var oldHead = this.head;
    if (!this.head) {
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    } else {
      var newHead = oldHead.next;
      newHead.prev = null;
      this.head = newHead;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }
  unshift(val) {
    var newNode = new Node(val);
    var oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
      this.length++;
      return this;
    }
  }
}
