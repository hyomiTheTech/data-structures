var Queue = function() {
  // use Object.Create
  var queue = Object.create(queueMethods);

  queue.storage = {};

  queue.count = 0;

  queue.deletedVal = [];
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  dequeue: function() {
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
  },

  size: function() {
    return this.count;
  }
};
