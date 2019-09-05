class BinaryNode {
    constructor(data, left = null, right = null){
    // a node has data, left, and right pointers
    // left and right are intialized as null
      this.data = data
      this.left = left
      this.right = right
    }
}
class BinaryTree {
    constructor(){
        // when a new Tree is made, it has a root property
      this.root = null
    }
    insert(data){
        // add a new Node to the tree, with data as the Node's data
      let newNode = new BinaryNode(data)

      // //if at root:::::
      // if (this.root == null) {
      //   this.root = newNode
      // } else if (!this.root.left && this.root.data > newNode.data) {
      //   this.root.left = newNode
      // } else if (!this.root.right && this.root.data < newNode.data) {
      //   this.root.right = newNode
      // } else {
      //   traverser(this.root, newNode)
      // }

      traverser(this.root, newNode)

      //if not at root:::::
      function traverser(nodeP, nodeC) {
        console.log(`traverser ran`);
        if (nodeP === null) {
            console.log(`nodeP was null`);
            nodeP = nodeC
        } else if (nodeP.data > nodeC.data) {
          // console.log(`traverser went LEFT with data::: ${nodeC.data} as child of::: ${nodeP.data}`);
          if (!nodeP.left) { nodeP.left = nodeC }
          traverser(nodeP.left, nodeC)
        } else if (nodeP.data < nodeC.data) {
          // console.log(`traverser went RIGHT with data::: ${nodeC.data} as child of::: ${nodeP.data}`);
          if (!nodeP.right) { nodeP.right = nodeC }
          traverser(nodeP.right, nodeC)
        } else {console.log(`${nodeC.data} assigned`)}
      }
      //
      // console.log(`this.root.data :::: ${this.root.data}`)
      // console.log(`newNode.data :::: ${newNode.data}`)
    }
    search(val){
        // search the Tree for a node with the given value
        // if the node exists, return it
        // if the node doesn't exist, return false
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node
    }
    getMax(){
        // return the maximum value stored in the tree
    }
    height(node){
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node
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
