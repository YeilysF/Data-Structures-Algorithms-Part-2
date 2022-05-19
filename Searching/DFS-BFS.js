class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
        //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
        //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  //BFS
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      //remove first node after searching from queue
      currentNode = queue.shift();
      //add node to the list
      list.push(currentNode.value);

      //add left node to the queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      //add right node to the queue
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  //BFS Recursive
  breadthFirstSearchRecursive(queue, list) {
    if (queue.length === 0) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }
  depthFirstSearchInorder(){
    return traverseInorder(this.root, []);
  }
  depthFirstSearchPostorder(){
    return traversePostorder(this.root, []);
  }
  depthFirstSearchPreorder(){
    return traversePreorder(this.root, []);
  }
}

//DFS Inorder
function traverseInorder(node, list){
  //traverse all the way to the last level of the tree to the bottom left node
  if(node.left){
    traverseInorder(node.left, list);
  }
  //push left nodes and then right nodes
  list.push(node.value);
  //traverse all the way to the last level of the tree to the bottom right node
  if(node.right){
    traverseInorder(node.right, list);
  }
  return list;
}

//DFS Postorder
function traversePostorder(node, list){
  //traverse all the way to the last level of the tree to the bottom left node
  if(node.left){
    traversePostorder(node.left, list);
  }
  //traverse all the way to the last level of the tree to the bottom right node
  if(node.right){
    traversePostorder(node.right, list);
  }
  //push children first
  list.push(node.value);
  
  return list;
}

//DFS Preorder
function traversePreorder(node, list){
  //push parent nodes first
  list.push(node.value);
  //traverse to the parent nodes and then left children
  if(node.left){
    traversePreorder(node.left, list);
  }
  //traverse to the parent nodes and then right children
  if(node.right){
    traversePreorder(node.right, list);
  }
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))
//console.log('BFS: ' + tree.breadthFirstSearch());
//console.log('BFS Recursive: ' + tree.breadthFirstSearchRecursive([tree.root], []));
console.log('DFS Inorder: ' + tree.depthFirstSearchInorder())
console.log('DFS Postorder: ' + tree.depthFirstSearchPostorder())
console.log('DFS Preorder: ' + tree.depthFirstSearchPreorder())
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}