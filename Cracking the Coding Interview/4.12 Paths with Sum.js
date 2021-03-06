function countPathsWithSum(tree, value) {
  if (!tree) return 0;
  return resultInEachNode(tree, value) + countPathsWithSum(tree.left, value) + countPathsWithSum(tree.right, value)
}

function resultInEachNode(node, value) {
  if (!node) return 0;
  let currentResult = 0;
  if (node.val === value) currentResult = 1;
  if (node.left) let left = resultInEachNode(node.left, value - node.val);
  if (node.right) let right = resultInEachNode(node.right, value - node.val);

  return currentResult + left + right;
}