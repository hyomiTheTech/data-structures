var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  var deletedVal = [];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    } else {
      size = 0;
    }

    deletedVal.push(storage[1]);
    delete storage[1];

    for (var i = 1; i <= size; i++) {
      var previousNum = i + 1;
      storage[i] = storage[previousNum];
    }

    return deletedVal.pop();
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
