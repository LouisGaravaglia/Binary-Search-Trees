class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    let currentNode = this.root;

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    while(true) {

      if ( val < currentNode.val ) {

        if ( currentNode.left === null ) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }

      } else if ( val > currentNode.val ) {

        if ( currentNode.right === null ) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }

      }

    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    
    if (!this.root) {
      this.root = new Node(val);;
      return this;
    }

      if ( val < currentNode.val ) {

        if ( currentNode.left === null ) {
          currentNode.left = new Node(val);;
          return this;
        } 

        return this.insertRecursively(val, currentNode.left);

      } else if ( val > currentNode.val ) {

        if ( currentNode.right === null ) {
          currentNode.right = new Node(val);;
          return this;
        } 

        return this.insertRecursively(val, currentNode.right);

    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    if (!currentNode) return undefined;

    while ( currentNode ) {

      if ( currentNode.val === val ) {
        return currentNode;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left
      }

    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {

    if (!currentNode) return undefined;

    while ( currentNode ) {

      if ( currentNode.val === val ) {
        return currentNode;
      } else if (currentNode.val < val) {
        return this.findRecursively(val, currentNode.right);
      } else {
        return this.findRecursively(val, currentNode.left);
      }

    }
    return undefined;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
