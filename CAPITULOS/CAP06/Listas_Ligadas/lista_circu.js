import { Instrumenter } from 'istanbul'
import { LinkedList } from '../Listas_Ligadas/Exemplo01'

class CircularLinkedList extends LinkedList {
    constructor (equalsFn = defaultEquals) {
        super(equalsFn)
    }
    insert(element, index) {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if(index == 0) {
                if(this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previus = this.getElementAt(index - 1);
                node.next = previus.next;
                previus.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if(index >= 0 && index <= this.count) {
            let current = this.head;
            if(index === 0) {
                if(this.size() === 1) {
                    this.head = undefined;
                }else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previus = this.getElementAt(index - 1);
                current = previus.next;
                previus.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
