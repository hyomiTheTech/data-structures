/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};

  limitedArray.get = function(index, key) {
    checkLimit(index);
    var found = this.find(index, key);
    if (found === false) {
      return undefined;
    } else {
      var tuple = storage[index][found];
      return tuple[1];
    }
  };

  limitedArray.set = function(index, tuple) {
    checkLimit(index);
    if (Array.isArray(storage[index])) {
      var found = this.find(index, tuple[0]);
      if (found !== false) {
        storage[index][found] = tuple;
      } else {
        storage[index].push(tuple);
      }
    } else {
      storage[index] = [];
      storage[index].push(tuple);
    }
  };

  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  limitedArray.find = function(index, key) {
    var tuples = storage[index];
    for (var i = 0; i < tuples.length; i++) {
      var tuple = tuples[i];
      if (tuple[0] === key) {
        return i;
      }
    }
    return false;
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};