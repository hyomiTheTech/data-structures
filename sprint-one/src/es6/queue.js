class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.deletedVal = [];
  }

  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  dequeue() {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }

    this.deletedVal.push(this.storage[1]);
    delete this.storage[1];

    for (var i = 1; i <= this.count; i++) {
      var previousNum = i + 1;
      this.storage[i] = this.storage[previousNum];
    }

    return this.deletedVal.pop();
  }

  size() {
    return this.count;
  }
}
