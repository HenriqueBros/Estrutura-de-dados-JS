// Outra funcionalidade chamada ABREVIACAO DE PROPRIEDADES(property shorthand)
// que e outra maneira de executar a destruturacao de objetos

let [x, y] = ['a', 'b'];
let obj = { x, y };
console.log(obj);

// Que e a mesma coisa que:

var x2 = 'a';
var y2 = 'b';
var obj2 = {x: x2, y: y2 };
console.log(obj2);