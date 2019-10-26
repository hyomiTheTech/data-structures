var BinarySearchTree = function(value) {
  var newClass = Object.create(tree);
  newClass.left = null;
  newClass.right = null;
  newClass.value = value;
  return newClass;
};
var tree = {};
tree.insert = function(value) {
  if (value > this.value) {
    if (this.right) {
      return this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      return this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};
tree.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    if (this.left && value < this.value) {
      return this.left.contains(value);
    } else if (this.right && value > this.value) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};
tree.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
