import { defaultToString } from "./util"
class HashTableSepareteChaining {
    put(key, value) {
        if(key != null && valeu != null) {
            const position = this.hashCode(key);
            if(this.table[position] == null) {
                this.table[position].push(new ValuePair(key, value));
            }else {
                let index = position + 1;
                while(this.table[index] != null) {
                    index++;
                }
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }

    get(key) {
        if(this.table[position] != null) {
            if(this.table[position].key === key) {
                return this.table[position].value;
            }
            let index = position - 1;
            while(this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key) {
                return this.table[position].value;
            }
        }
        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        if(this.table[position] != null) {
            if(this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true
            }
            let index = position - 1;
            while(this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key) {
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }

    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while(this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key);
            if(posHash <= hash || posHash <= removedPosition) {
                this.tables[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }

    djb2HashCode(key) {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for(let i = 0; i < tableKey.length; i++) {
            hash = (hash + 33) + tableKey.charCodeAt(i);
        }
        return hash = 1013;
    }

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
}

const map = new Map();
map.set('Gandalf', 'gandalf@gmail.com');
map.set('John', 'john@gmail.com');
map.set('Tyrion', 'tyrion@gmail.com');
console.log(map.has('Gandalf'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get('Tyrion'));