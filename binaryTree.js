class BinaryNode {
    constructor(data, left = null, right = null){
    // a node has data, left, and right pointers
    // left and right are intialized as null
      this.data = data
      this.left = left
      this.right = right
    }
}

// ::::::::CODE FROM CLASS:::::::::
// const searchTree = (val, currentNode) => {
//   if(!currentNode) {return false}
//
//   if(currentNode.data === val) {return true}
//
//   return searchTree(val, currentNode.left) || searchTree(val, currentNode.right)
// }
//
// const countNodesHelper = (count = 0, currentNode, baseNode) => {
//   if(!currentNode) {return count} //if no nodes
//
//   if(currentNode) {
//     count++
//     return
//   }
// }
//
// let sizeCounter;
//
// //
let nodeForMax;

const traceC  = (x) => {
  console.log(x)
  x = 123;
  return x
}

const trace = (x) => (console.log(x), x += 1, x)

class BinaryTree {
    constructor(){
        // when a new Tree is made, it has a root property
      this.root = null
    }

    insert(data){
        // add a new Node to the tree, with data as the Node's data
      let newNode = new BinaryNode(data)

      //if at root:::::
      if (this.root == null) {
        this.root = newNode
        return
      }

      //if not at root:::::
      traverser(this.root, newNode)

      function traverser(nodeP, nodeC) {
        if (nodeP.data > nodeC.data) {
          if (!nodeP.left) { nodeP.left = nodeC }
          traverser(nodeP.left, nodeC)
        } else if (nodeP.data < nodeC.data) {
          if (!nodeP.right) { nodeP.right = nodeC }
          traverser(nodeP.right, nodeC)
        }
      }
    }

    search(val){
        // search the Tree for a node with the given value
        // if the node exists, return it //actual test is for boolean, not node
        // if the node doesn't exist, return false
        // console.log(`search ran with value: ${val}`);

        let foundBool = false;

        //0 nodes
        if (this.root === null) {
          // console.log(`there is no root`);
          return foundBool}

        //1 node
        if (this.root && !this.root.left && !this.root.right && this.root.data === val) {
          // console.log(`there is root children of root`);
          foundBool = true;
          return foundBool
        } else {
          traverser(this.root)
          return foundBool
        }
        //2+ nodes
        function traverser(currentNode) {
          // console.log(`traverser ran at currentNode: ${currentNode.data}`);
          if (currentNode.data === val) {
            foundBool = true;
            return foundBool //returning bool instead of node due to tests
          } else if (currentNode.data > val) {
            if (currentNode.left === null) {
              foundBool = false;
              return foundBool
            }
            currentNode = currentNode.left
            // console.log(`went LEFT. now currentNode: ${currentNode.data}`);
            traverser(currentNode)
          } else if (currentNode.data < val) {
            if (currentNode.right === null) {
              foundBool = false;
              return foundBool
            }
            currentNode = currentNode.right
            // console.log(`went RIGHT. now currentNode: ${currentNode.data}`);
            traverser(currentNode)
          }
          return foundBool
        }
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node

        return !node ? 0 : 1 + this.size(node.left) + this.size(node.right)

        //PREVIOUS ATTEMPT:
        // let nodeCounter = 0;
        //
        // traverser(node)
        //
        // function traverser(startNode) {
        //   if (!startNode) {
        //     return nodeCounter
        //   } else if (startNode) {
        //     nodeCounter++
        //     if (!startNode.left && !startNode.right) { return nodeCounter }
        //   }
        // }
    }
    getMax(){ //I added node parameter
        // return the maximum value stored in the tree

        return !this.root.right ? this.root.data
          : (this.root = this.root.right, this.getMax())
            //paranthesis operate allows stuff to occur then return value

    }
    height(node = this.root){
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node

        // props to freeCodeCamp for explaining the below code!
        if (node == null) { return 0 }

        let left = this.height(node.left)
        let right = this.height(node.right)
        if (left > right) {
          return left + 1
        } else {
          return right + 1
        }

    }
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}
