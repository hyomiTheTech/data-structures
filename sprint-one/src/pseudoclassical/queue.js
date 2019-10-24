var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.deletedVal = [];
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.count;
};
