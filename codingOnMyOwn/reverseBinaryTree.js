class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}


let node1 = new BinaryTree(1);
let node2 = new BinaryTree(2);
let node3 = new BinaryTree(3);
let node4 = new BinaryTree(4);
let node5 = new BinaryTree(5);
let node6 = new BinaryTree(6);
let node7 = new BinaryTree(7);
let node8 = new BinaryTree(8);
let node9 = new BinaryTree(9);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node4.left = node8;
node4.right = node9;

const getBinary = node => {
  let leftValue = (node.left)? (node.left.value) : (null)
  let rightValue = (node.right)? (node.right.value) : (null)
  return [node.value, leftValue, rightValue]
}

// console.log(getBinary(node3))


// Original Binary Tree
//               1
//            /     \
//         2         3
//       /   \      /  \
//      4     5    6    7
//    /   \
//  8       9


const reverseBinaryTree = currentNode => {
  if (currentNode) {
    let tempLeftNode = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = tempLeftNode;
    reverseBinaryTree(currentNode.left)
    reverseBinaryTree(currentNode.right)
  }
} 


console.log(getBinary(node1))
console.log(getBinary(node2))
console.log(getBinary(node3))
console.log(getBinary(node4))
console.log(getBinary(node5))
console.log(getBinary(node6))
console.log(getBinary(node7))
console.log(getBinary(node8))
console.log(getBinary(node9))


console.log("")
reverseBinaryTree(node1)
console.log(getBinary(node1))
console.log(getBinary(node2))
console.log(getBinary(node3))
console.log(getBinary(node4))
console.log(getBinary(node5))
console.log(getBinary(node6))
console.log(getBinary(node7))
console.log(getBinary(node8))
console.log(getBinary(node9))





// Reversed Binary Tree
//               1
//            /     \
//         3         2
//       /   \      /  \
//      7     6    5    4
//                    /   \
//                   9     8
