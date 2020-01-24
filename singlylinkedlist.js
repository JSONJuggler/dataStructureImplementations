// piece of data - val
// reference to next node - next

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
    var newNode = new Node(val);
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
    var current = this.head;
    var newtail = current;
    if (!current) {
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    } else {
      while (current.next) {
        newtail = current;
        current = current.next;
      }
      newtail.next = null;
      this.tail = newtail;
      this.length--;
      return current;
    }
  }
  shift() {
    var currentHead = this.head;
    if (!currentHead) {
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHead.val;
    } else {
      this.head = currentHead.next;
      this.length--;
      return currentHead;
    }
  }
  unshift(val) {
    var newNode = new Node(val);
    var oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    } else {
      var idx = index;
      var start = this.head;
      var node = start;
      for (var i = 1; i <= idx; i++) {
        var next = node.next;
        node = next;
      }
      return node;
    }
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(val);
      return true;
    } else if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      var newNode = new Node(val);
      var prevNode = this.get(index - 1);
      var temp = prevNode.next;
      newNode.next = temp;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      var prevNode = this.get(index - 1);
      var removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }
  reverse() {
    var oldTail = this.tail;
    this.tail = this.head;
    this.head = oldTail;

    var next = null;
    var prev = null;
    var node = this.tail;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// creates new emtpy singly linked list
// var list = new SinglyLinkedList();

// creates new node with val property and null next property
// var newNode = new Node(val)
