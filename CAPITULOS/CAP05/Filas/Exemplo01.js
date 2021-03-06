class Queue {
    constructor(count, email,items) {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
        
    enqueue() {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result;
    }

    items = {
        0: 5,
        1: 8
    };

    counst = 2;
    lowestCount = 0;

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

// enqueue(element) - adiciona um novo elemento no final da FILA
// dequeue() - remove o primeiro elemento da FILA
// peek() - devolve o primeiro elemento FILA
// isEmpty() - devolve TRUE se a lista nao estiver nenhum elemento
// size - mostra o tamanho da FILA  - semelhante ao lenth do array


const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

console.log(queue.toString());