// Metodo UNSHIFT que insere no inicio do array:
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

for( let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log('---------------------------------')
for( let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}