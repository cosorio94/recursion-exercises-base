const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  let arrayElements = [];
  let objectElements = [];
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  } else if (typeof obj === 'string') {
    return `"${String(obj)}"`;
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      _.each(obj, el => arrayElements.push(stringify(el)));
      return '[' + String(arrayElements) + ']';
    } 
  } else if (typeof obj === 'object') {
    if (_.isEmpty(obj)) {
      return '{}';
    } else {
      _.each(obj, (value, key) => {
        objectElements.push(stringify(key) + ':' + stringify(value));
      });
      return '{' + objectElements + '}';
    }
  }

};

module.exports = {
  stringify: stringify
};