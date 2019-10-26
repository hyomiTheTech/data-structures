var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  this._storage.set(index, tuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(tuples, index, storage) {
    if (Array.isArray(tuples)) {
      for (var i = 0; i < tuples.length; i++) {
        var tuple = tuples[i];
        if (tuple[0] === k) {
          console.log(_.without(tuples, tuple));
          return storage[index] = _.without(tuples, tuple);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
