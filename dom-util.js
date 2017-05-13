
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  node.childNodes.forEach(child => visitAllNodes(child, callback));
  callback(node);
  return;
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let flattenTree = [];
  visitAllNodes(node, element => flattenTree.push(element));
  return flattenTree;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};