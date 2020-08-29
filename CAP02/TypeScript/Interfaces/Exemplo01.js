//O primeiro conceito esta relacionado a atribuicao de um tipo a uma variavel
function printName(person) {
    console.log(person.name);
}
// É uma descricao de atributos e de metodos que um objeto deve ter.
var john = { name: 'John', age: 21 };
var mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);
