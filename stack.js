// singly linked list implementation of a stack
// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  pop() {
    var currentStart = this.start;
    if (!currentStart) {
      return;
    } else if (this.size === 1) {
      this.start = null;
      this.end = null;
      this.size--;
      return currentStart;
    } else {
      this.start = currentStart.next;
      this.size--;
      return currentStart;
    }
  }
  push(val) {
    var newNode = new Node(val);
    var oldStart = this.start;
    if (!this.start) {
      this.start = newNode;
      this.end = this.start;
    } else {
      newNode.next = oldStart;
      this.start = newNode;
    }
    this.size++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.size) {
      return;
    } else {
      var idx = index;
      var start = this.start;
      var node = start;
      for (var i = 1; i <= idx; i++) {
        var next = node.next;
        node = next;
      }
      return node;
    }
  }
  print() {
    var arr = [];
    var current = this.start;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// creates new emtpy stack
var stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
