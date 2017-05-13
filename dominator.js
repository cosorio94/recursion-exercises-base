const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let flattenTree = flattenTreeToArray(root);
  elements = _.filter(flattenTree, (el) => el.id === id);
  return elements[0];
};

const getElementsByClassName = function(root, className) {
  let flattenTree = flattenTreeToArray(root);
  return _.filter(flattenTree, el => {
    if (el.className) {
      return _.contains(el.className.split(' '), className);
    }
  });
};

const getElementsByTagName = function(root, tagName) {
  let flattenTree = flattenTreeToArray(root);
  return _.filter(flattenTree, el => {
    if (el.tagName) {
      return _.contains(el.tagName.split(' '), tagName);
    }
  });
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
