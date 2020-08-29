import * as area from './lib/CalcArea.mjs';
import Book from './lib/Book.mjs';
console.log(area.circleArea(2));
console.log(area.squareArea(2));
const myBook = new Book('some title');
myBook.printTitle();

// mudamos a extencao para .mjs e executamos usando
// node --experimental-modules 