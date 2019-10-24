var Stack = function() {
  this.storage = {};
  this.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count = 0;
  }

  return this.storage[this.count + 1];
  delete this.storage[this.count + 1];
};

Stack.prototype.size = function() {
  return this.count;
};
