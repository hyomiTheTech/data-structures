var Stack = function() {
  var someInstance = {};

  var storage = {};

  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
    } else {
      size = 0;
    }

    return storage[size + 1];
    delete storage[size + 1];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
