// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  // var node3 = {
  //   value: 3,
  //   connected: [2]
  // }
  // var node2 = {
  //   value: 2,
  //   connected: [3]
  // }
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodes).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var update = this.nodes[node];

  for (var i = 0; i < update.length; i++) {
    var target = update[i];
    var connections = this.nodes[target];
    var newConnections = _.without(connections, node);
    this.nodes[target] = newConnections;
  }

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var newConnections = _.without(this.nodes[fromNode], toNode);
  this.nodes[fromNode] = newConnections;

  newConnections = _.without(this.nodes[toNode], fromNode);
  this.nodes[toNode] = newConnections;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
