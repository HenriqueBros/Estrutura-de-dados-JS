// DESTRUTUTACAO DE ARRAY (array destructuring)
// que e uma maneira de INICIALIZAR variaveis de uma so vez.

let [x, y] = ['a', 'b'];

console.log(x,y);

// Que e a mesma coisa que fazer este codigo:

let x2 = 'a';
let y2 = 'b';

console.log(x2,y2);

// Tambem pode ser usada para troca de valores (swap) de uma so vez, sem a necessidade da variavel temp

[x, y] = [y, x];

// Que e o mesmo que:

var temp = x;
x = y;
y = temp;

// Este recurso vai ser muito util para Algoritimos de Ordenacao.