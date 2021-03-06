/*
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

     difference(otherSet) {
         const differenceSet = new Set();
         this.values().forEach(value => {
             if(!otherSet.has(value)) {
                 differenceSet.add(value);
             }
         });
         return differenceSet;
     }

     isSubsetOf(otherSet) {
         if(this.size > otherSet.size) {
             return false;
         }
         let isSubset = true;
         this.values().every(value => {
             if(!otherSet.has(value)) {
                 isSubset = false;
                 return false;
             }
             return true;
         })
         return isSubset;
     }

    constructor() {
        this.items = {};
    }
}
*/

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
/*
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
*/
//-------------------------------------------------

//Teste de Diferença de Conjuntos
/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const differenceAB = setA.difference(setB);
console.log(differenceAB.values());
*/
//-------------------------------------------------

//Tesde de Subconjunto de Conjuntos
/*
const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC =  new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));
*/

//Testar a classe Set
/*
const set = new Set();
set.add(1);
set.add(3);
console.log(set.values());
console.log(set.has(1));
console.log(set.size);
*/

//----------------------------
//Set ES2015 - utilizando dois conjuntos

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

//Simulando Uniao
const union = (set1, set2) => {
    const unionAB = new Set();
    set1.forEach(value => unionAB.add(value));
    set2.forEach(value => unionAB.add(value));
    return unionAB;
}
//console.log(union(setA, setB));
console.log(new Set([...setA, ...setB]));

//Simulando Intersecção
const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if(set2.has(value)) {
            intersectionSet.add(value);
        }
    })
    return intersectionSet;
} 

//console.log(intersection(setA, setB));
console.log(new Set([...setA].filter(x => setB.has(x))));

//Simulando Diferença
const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if(!set2.has(value)) {
            differenceSet.add(value);
        }
    })
    return differenceSet;
} 

//console.log(difference(setA, setB));
console.log(new Set([...setA].filter(x => !setB.has(x))));