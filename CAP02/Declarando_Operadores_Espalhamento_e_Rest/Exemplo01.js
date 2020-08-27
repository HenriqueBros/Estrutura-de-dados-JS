function sum(x = 1, y = 2, z = 3) {
    return x+ y + z;
}
let params = [3, 4, 5];

console.log(sum(...params));

// O operador de espalhamento(...) tambem pode ser usado como parametro `rest` em funcoes para substituir o `arguments`.

function restParamaterFunction(x,y, ...a) {
    return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, 'hello', true, 7));