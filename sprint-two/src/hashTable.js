var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKeys(k, this._limit);
  this._storage[index] = [];
  var bucket = this._storage[index];
  var tuple = [k, v];

  if (Array.isArray(bucket[0]) === true) {
    for (var i = 0; i < bucket.length; i++) {
      var tuples = bucket[i];
      if (tuples[0] === k) {
        tuples[1] = v;
      }
    }
  } else {
    bucket.push(tuple);
  }

  // receive an index and push a bucket in the index we get from the getIndexBelowMax.

  // if the index has bucket, we reassign the value,

  // else we push the tuple.
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKeys(k, this._limit);
  var bucket = this._storage[index];

  // iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuples = bucket[i];
    if (tuples[0] === k) {
      return tuples[1];
    } else {
      return undefined;
    }
  }

  // check to see if tuples[0] is equal k
  // if yes return tuples[1]
  // if can't find it return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKeys(k, this._limit);
  var bucket = this._storage[index];

  for (var i = 0; i < bucket.length; i++) {
    var tuples = bucket[i];
    if (tuples[0] === k) {
      bucket.splice(i, 1);
      this._storage[index] = bucket;
    }
  }
  // iterate over the bucket,
  // if tuple[0] === k
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
