let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function multipleOf13(element, index, array) {
    return (element % 13 == 0);
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

// os metodos find e findIndex recebem uma funcao de CALLBACK, a qual buscara um valor que satisfaca a
// condicao presente na funcao de teste (callback).
// Nesse exemplo vereficamos se ele tem um valor multiplo de 13.
// find devolve o PRIMEIRO valor do array que satisfaca a condicao.
// findIndex  devolve o INDICE do primeiro valor do array que satisfaca a condicao.