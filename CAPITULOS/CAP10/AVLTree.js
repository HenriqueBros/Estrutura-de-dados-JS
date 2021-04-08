import { BinarySearchTree } from './BinarySearchTree';
import { Compare } from './util';

class AVLTree extends BinarySearchTree {
    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(
            this.getNodeHeight(node.left),
            this.getNodeHeight(node.right)
        ) +1;
    }
    
    getBalanceFactor(node) {
        const heightDifferent = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifferent) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    //Rotação Esquerda-Esquerda ou Direita Simples
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    
    //Rotação Direita-Direita ou Esquerda Simples
    rotationRR(node) {
        const tmp = node.right;
        node.right = node.left;
        tmp.left = node;
        return tmp;
    }

    //Rotação Esquerda-Direita ou Direita Dupla
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    //Rotação Direita-Esquerda ou Dupla Esquerda
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key) {
        this.root = this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }
        const  balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === balanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }
        if (balanceFactor == BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                node = this.rotationRL;
            }
        }
        return node;
    }
    
    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == null) {
            return node;
        }
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === balanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.balanceFactor(node.left);
            if (balanceFactorLeft === BalanceFactor.BALANCED || 
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                    return this.rotationLL(node);
                }
                if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                    return this.rotationLR(node.left);
                }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (balanceFactorRight === BalanceFactor.BALANCED || 
                balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                    return this.rotationRR(node);
                }
                if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                    return this.rotationRL(node.right);
                }
        }
        return node;
    }

    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
}

const BalanceFactor = { 
    UNBALANCED_RIGHT: 1, 
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5 
};