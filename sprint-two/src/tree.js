var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    var result = false;
    for (var i = 0; result === false && i < this.children.length; i++) {
      result = this.children[i].contains(target);
    }
    return result;
  }
  return false;
};

// var giveChild = function(tree, value) {
//   if (tree.children.length === 0) {
//     tree.children.push(tree);
//   } else {
//     giveChild(tree.children, value);
//   }
// };
/*
 * Complexity: What is the time complexity of the above functions?
 */
