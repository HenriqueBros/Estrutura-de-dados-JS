import { defaultToString } from './util.js';

export default class Dictionary {
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    
    set(key, value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        if(this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    get(key) {
        const ValuePair = this.table[this.toStrFn(key)];
        return ValuePair == null ? undefined : ValuePair.value;
    }
    
    //Metodos auxiliares.
    keyValues() {
        return Object.values(this.table);
    }

    key() {
        return this.keyValues().map(ValuePair => ValuePair.key);
    }

    forEach(callbackFn) {
        const ValuePairs = this.keyValues();
        for(let i = 0; i < ValuePairs.length; i++) {
            const result = callbackFn(ValuePairs[i].key,
            ValuePairs[i].value);
            if(result === false) {
                break;
            }
        }
    }

    //Metodos clear, size, isEmpyte, toString
    size() {
        return Object.keys(this.table).length;
    } 

    isEmpety() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if(this.isEmpety()) {
            return '';
        }
        const ValuePairs = this.keyValues();
        let objString = `${ValuePairs[0].toString()}`;
        for(let i = 0; i < ValuePairs.length; i++) {
            objString = `${objString}, ${ValuePairs[i].toString()}`;
        }
        return objString;
    }
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
}
//Classe ValuePair
class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[${this.key}: ${this.value}]`;
    }
}

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@gmail.com');
dictionary.set('Jhon', 'jhon@gmail.com');
dictionary.set('Tyrion', 'tyrion@gmail.com');

console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());
console.log("-------------");
console.log(dictionary.key());
//console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));