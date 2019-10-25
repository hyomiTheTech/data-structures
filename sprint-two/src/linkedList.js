var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    list.tail = newNode;

    if (list.head === null) {
      list.head = newNode;
    } else {
      list.setTail(list.head, newNode);
    }

    // create a new function that we will recurse
  };

  list.setTail = function(node, newNode) {
    if (node.next === null) {
      return (node.next = newNode);
    } else {
      return list.setTail(node.next, newNode);
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    var newHead = list.head.next;
    list.head = newHead;

    return oldHead;
  };

  list.contains = function(target) {
    return list.checkValue(list.head, target);
  };

  list.checkValue = function(node, value) {
    if (node.value === value) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return list.checkValue(node.next, value);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
