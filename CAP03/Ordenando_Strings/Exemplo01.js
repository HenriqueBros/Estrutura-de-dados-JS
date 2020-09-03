let names = ['Ana', 'ana', 'john', 'John'];

console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}));