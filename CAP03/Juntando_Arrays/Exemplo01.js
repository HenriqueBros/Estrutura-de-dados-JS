// Metodo CONCAT que junta os arrays:

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}