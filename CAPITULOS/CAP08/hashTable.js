import { defaultToString } from './util';
//import { Dictionary } from './dictionary';

class HashTable {
    loseloseHashCode(key) {
        if(typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if(key != null && value != null) {
            const position = this.hashCode;
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(ValuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    toString() { 
        if (this.isEmpty()) { 
            return '';
     } 
     const keys = Object.keys(this.table);
     let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
     for (let i = 1; i < keys.length; i++) {
        objString = `${objString},{${keys[i]} => 
        ${this.table[keys[i]].toString()}}`;
     } 
        return objString; 
    }

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@gmail.com');
hash.put('John', 'johnsnow@gmail.com');
hash.put('Tyron', 'tyrion@gmail.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyron') + ' - Tyron');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

console.log(HashTable.toString());