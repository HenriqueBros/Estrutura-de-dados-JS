const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// O metodo SPLICE pode ser usado para remover um elemento de um array.

numbers.splice(5, 3);

// REMOVE tres elementos A PARTIR do indice 5;

// Para INSERIR
// Usamos:

numbers.splice(5, 0, 2, 3, 4);

// O primeiro ARGUMENTO é o INDICE a partir do qual queremos REMOVER ou INSERIR;
// O segundo  ARGUMENTO e a QUANTIDADE de elementos que queremos REMOVER;
// Do terceiro ARGUMENTO em diante sao os valores que queremos INSERIR;