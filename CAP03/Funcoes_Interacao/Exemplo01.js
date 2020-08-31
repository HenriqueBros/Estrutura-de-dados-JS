const isEven = x => x % 2 === 0;
let numbers = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10 , 11, 12, 13, 14, 15];

isEven()

// EVERY
// ITERA pelos elementos do array ate que a funcao devolva FALSE:
numbers.every(isEven);
console.log(numbers.every(isEven));
console.log('--')
// SOME
// ITERA pelos elementos do array ate que a funcao devolva TRUE;
numbers.some(isEven);
console.log(numbers.some(isEven));
console.log('--')
// FOREACH
// ITERACAO em todo o array
// O resultado e o mesmo que usar um laco FOR com o codigo da funcao dentro dele:
numbers.forEach(x => console.log(x % 2 === 0));
console.log('--')
// MAP
// Devolve um NOVO array,
// ARMAZENANDO os resultados da funcao isEven  
const myMap = numbers.map(isEven);
console.log(myMap);
console.log('--')
// FILTER
// Devolve um NOVO array com os elementos para os quais a funcao devolve TRUE:
const eventNumbers = numbers.filter(isEven);
console.log(eventNumbers);
console.log('--')
// REDUCE
// Recebe uma FUNCAO com os seguintes parametros:
// previusValue, currentValue, index e array:
// os parametros INDEX e ARRAY sao OPCIONAIS;
// Devolve um valor que sera somado acumulador, o qual sera DEVOLVIDO depois que o metodo REDUCE parar de executar;
// Util se quisermos somar todos os valores de um array:
const myReduce =numbers.reduce((previus, current)=> previus + current);
console.log(myReduce);
console.log('--')
// Esses tres metodos (MAP, FILTER, REDUCE) constituem a base da programacao funcional em JavaScript;

// OBJETO @@iterator

let iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}
console.log('--')

// Metodo ENTRIES devolve o @@iterator, que contem pares CHAVE/VALOR.
// Como o array numbers so contem numeros, KEY sera a posicao do array e VALUE sera o valor armazenado no indice do array.
let aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}
console.log('--')

// Metodo KEYS devolve o @@iterator que possui as CHAVES do array
// Para o array numbers, key contera os indices do array.
const aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

// Metodo VALUES devolve o @@iterator, que contem os VALORES do array;
const aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

// O metodo FROM cria um outro array a partir de um array EXISTENTE.
// Para copiar o array numbers para outro array podemos usar:
let numbers2 = Array.from(numbers);
console.log(numbers2);

// O metodo ARRAY.OF cria um outro array a partir de argumentos passados para o metodo:
let numbers3 = Array.of(1,2,3,4,5,6);
// Podemos fazer uma COPIA de um array existente:
let numbersCopy = Array.of(...numbers3);
// (...) e um operador de espalhamento, que faz o espalhamento de CADA valor do array nos ARGUMENTOS.

// O metodo FILL preenche o array com um valor
numbersCopy.fill(0);
// Nesse caso todos as posicoes sera 0 (zero);
// .fill com dois argumentos dentro do ( ):
numbersCopy.fill(2, 1);
// Neste exemplo todos as posicoes do array terao o valor 2, a partir da posicao 1.
// .fill com tres argumentos dentro do ( ):
numbersCopy.fill(1, 3, 5);
// Neste exemplo preenchemos o array com o valor 1, do indice 3 ao indice 5 (NAO INCLUSO).
// É otimo para criar um vetor e inicar seus valores,
// Nesse exemplo um array de tamanho 6 e todos valores 1:
let ones = Array(6).fill(1);

// Usando o metodo COPYWUTHIN:
