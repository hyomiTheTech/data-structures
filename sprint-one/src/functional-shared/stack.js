var Stack = function() {
  var stack = {};

  stack.storage = {};

  stack.count = 0;

  _.extend(stack, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  pop: function() {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }

    return this.storage[this.count + 1];
    delete this.storage[this.count + 1];
  },

  size: function() {
    return this.count;
  }
};
