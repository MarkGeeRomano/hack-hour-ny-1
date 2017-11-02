/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// function validBST(tree) {
//   if (!tree) return true;
//   if (!tree.left && !tree.right) return true;
//   if (tree.left && (tree.value < tree.left.value)) return false;
//   if (tree.right && (tree.value > tree.right.value)) return false;
//   return validBST(tree.left) && validBST(tree.right);
// }

function validBST(tree) {
  if (!tree) return true;
  const value = tree.value;
  const left = tree.left;
  const right = tree.right;
  
  if (left) {
    if (value < left.value) return false; 
    if (left.left && left.left.value > left.value) return false; 
    if (left.right && (left.right.value > value || left.right.value < left.value)) return false;  
  }
  if (right) {
    if (value > right.value) return false;
    if (right.left && (right.left.value < value || right.left.value > right.value)) return false; 
    if (right.right && right.right.value < right.value) return false; 
  }
  
  return validBST(left) && validBST(right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
