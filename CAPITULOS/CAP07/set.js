class Set {
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
 
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true
        }
        return false;
    }
    
    clear() {
        this.items = {};
    }

    values() {
        return Object.values(this.items);
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if(biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    constructor() {
        this.items = {};
    }
}

//Teste ADD com Class SET
/*
const set = new Set();
set.add(1);

console.log(set.values());
console.log(set.values(1));
console.log(set.values());

set.add(2);

console.log(set.values());
console.log(set.values(2));
console.log(set.values());

set.delete(1);
console.log(set.values());

set.delete(2);
console.log(set.values());
*/

//-------------------------------------------------

//Teste Uniao de Conjuntos
/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values());
*/
//-------------------------------------------------

//Teste Intersecção de Conjuntos

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());