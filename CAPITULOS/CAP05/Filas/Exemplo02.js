class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront() {
        if(this.isEmpty()) {
            this.addBack();
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i > 0; i++) {
                this.items[i] = this.items[i - 1];
            }
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
    }
}



// addFront(element) - adiciona um novo elemento na FRENTE do  DEQUE
// addBack(element) - adiciona um novo elemento no FINAL do DEQUE
// removeFront() - remove  o PRIMEIRO elemento do DEQUE
// removeBack() - remove o ULTIMO elemento do DEQUE
// peekFront() - devolve o PRIMEIRO elemento do DEQUE
// peekBack() - remove o ULTIMO elemento do DEQUE
