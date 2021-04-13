//import { showHelpOnFail } from 'yargs';
//import { defaultCompare }  from './util';
import { defaultCompare } from '../../src/js/util';
export class minHeap {
    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }

    insert(value) {
        if (value != 0) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true
        }
        return false;
    }

    siftUp(index) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    swap(array, a, b) {
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    
    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    findMinimun() {
        return this.isEmpty() ? undefined : this.heap[0];
    }

    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this.heap.shift();
        }
        const removedValue =  this.heap.shift();
        this.siftDown(0);
        return removedValue;
    }

    

    constructor (compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }
} 

const heap = new minHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap size:', heap.size());
console.log('Heap is empty:', heap.isEmpty());
console.log('Heap min value:', heap.findMinimun());