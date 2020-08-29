const area = require('./lib/CalcArea');
const Book = require('./lib/Book');
console.log(area.circleArea(2));
console.log(area.squareArea(2));
const myBook = new Book('some title');
myBook.printTitle();