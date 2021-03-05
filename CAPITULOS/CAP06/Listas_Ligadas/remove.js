removeAt(index) {
    if (index >= 0 && index < this.count) {
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        } else {
            let previus;
            for (let i = 0; i < index; i++) {
                previus = current;
                current = current.next;
            };
            previus.next = current.next;
        };
        this.count--;
        return current.element;
    };
    return undefined;
};