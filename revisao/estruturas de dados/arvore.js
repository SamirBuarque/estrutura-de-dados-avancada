class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
   
    toString(){
        return this.data
    }

}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)

        if(this.root === null) {
            this.root = newNode
        }
        else {
            this._insertNode(this.root, newNode)
        }
    }

    _insertNode(node, newNode) {
        if(newNode.data < node.data){
            if(node.left === null) {
                node.left = newNode
            }
            else {
                this._insertNode(node.left, newNode)
            }
        }
        else {
            if(node.right === null) {
                node.right = newNode
            }
            else {
                this._insertNode(node.right, newNode)
            }
        }
    }

    inOrder(node = this.root) {
        // subárvore esquerda - raiz - subárvore direita
        if(node !== null) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
        else {
            return null
        }
    }

    preOrder(node = this.root) {
        // raiz - subárvore esquerda - subárvore direita
        if(node !== null) {
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
        else {
            return null
        }
    }

    postOrder(node = this.root) {
        // subárvore esquerda - subárvore direita - raiz
        if(node !== null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
        else {
            return null
        }
    }

}

let tree = new BinaryTree()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

/*
      10
   /    \
  5     15
 / \   /  \
3   7 12  18
*/

console.log("Percurso in-order:")
tree.inOrder()
console.log("percurso pre-order:")
tree.preOrder()
console.log("percurso post-order:")
tree.postOrder()


