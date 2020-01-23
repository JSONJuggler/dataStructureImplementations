class Node {
  // initialize a node with props below
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  // initialize a singly linked list with props below
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    // if there is no head, set newNode as head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
      // set next property of current tail to new node and
      // prev property of new node to current tail and finally
      // update tail to new node
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
      // if length of list is 1, set head and tail of list
      // as null
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
      // store node before tail and set its next prop to null
      // and then set the node before the current tail as the new tail
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
      // if there is only 1 node, remove it
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    } else {
      // remove the old head and make the next node the new head
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
      // make the new node the head
    } else {
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
      this.length++;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    } else if (this.length - index <= index - 0) {
      // loop from the end of list
      var currentNode = this.tail;
      // move up list and update currentNode while "index" of
      // currentNode is not the same as index, will return
      // currentNode when it's "index" is the same as index
      for (var i = this.length - 1; i > index; i--) {
        var prevNode = currentNode.prev;
        currentNode = prevNode;
      }
      return currentNode;
    } else {
      // loop from the start of list
      var currentNode = this.head;
      // move down list and update currentNode while "index" of
      // currentNode is not the same as index, will return
      // currentNode when it's "index" is the same as index
      for (var i = 0; i < index; i++) {
        var nextNode = currentNode.next;
        currentNode = nextNode;
      }
      return currentNode;
    }
  }
  set(index, val) {
    var foundNode = list.get(index);
    if (!foundNode) {
      return false;
      // if a node is found a index, set update val
    } else {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val) {
    // return false if index is out of range of list
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      list.unshift(val);
      return true;
    } else if (index === this.length) {
      list.push(val);
      return true;
      // insert node at index with correct prev and next props,
      // update prev node next prop and update next node prev
    } else var newPrev = list.get(index - 1);
    var newNext = newPrev.next;
    var newNode = new Node(val);
    newPrev.next = newNode;
    newNext.prev = newNode;
    newNode.prev = newPrev;
    newNode.next = newNext;
    this.length++;
    return true;
  }
}
