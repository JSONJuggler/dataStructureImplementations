// singly linked list implementation of a queue
// by queing val at the end of list (push) and dequeing
// at the beginning of the list (shift)

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  // old push(val)
  inQ(val) {
    var newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.end = this.start;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.size++;
    return this;
  }
  // old shift()
  deQ() {
    var currentStart = this.start;
    if (!currentStart) {
      return;
    } else if (this.size === 1) {
      this.start = null;
      this.end = null;
      this.size--;
      return currentStart.val;
    } else {
      this.start = currentStart.next;
      this.size--;
      return currentStart;
    }
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

// creates new emtpy Queue
var queue = new Queue();
queue.inQ(2);
queue.inQ(4);
queue.inQ(6);
