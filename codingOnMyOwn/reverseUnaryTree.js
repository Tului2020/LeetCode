class Tree {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(nextNode) {
    this.next = nextNode
  }


}

let node0 = new Tree("a")
let node1 = new Tree("b")
let node2 = new Tree("c")
let node3 = new Tree("d")

node0.setNext(node1)
node1.setNext(node2)
node2.setNext(node3)



const showNodes = firstNode => {
  let returnNodes = `${firstNode.value} `;
  let currentNode = firstNode;

  while (currentNode.next) {
    returnNodes += `-> ${currentNode.next.value} `
    currentNode = currentNode.next
  }
  return returnNodes
}

console.log(showNodes(node0))





const reverseUnaryTree = firstNode => {
  let previousNode = firstNode;
  let currentNode = firstNode.next;
  let nextNode = currentNode.next;
  previousNode.setNext(null);


  while (nextNode) {
    currentNode.setNext(previousNode);
    previousNode = currentNode
    currentNode = nextNode;
    nextNode = nextNode.next
  }

  currentNode.setNext(previousNode)

}

reverseUnaryTree(node0)

console.log(showNodes(node3))











