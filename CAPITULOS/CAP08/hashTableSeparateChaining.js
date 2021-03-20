import { defaultToString } from "./util"

class HashTableSepareteChaining {
    put(key, value) {
        if(key != null && valeu != null) {
            const position = this.hashCode(key);
            if(this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position]; 
        if (linkedList != null && !linkedList.isEmpty()) { 
            let current = linkedList.getHead(); 
            while (current != null) {  
                if (current.element.key === key) {
                    return current.element.value; 
                } 
                current = current.next;
            }
         } 
         return undefined;
    }

    remove(key) {
        const position = this.hashCode[position];
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position]
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
}