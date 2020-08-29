//O primeiro conceito esta relacionado a atribuicao de um tipo a uma variavel

interface Person {
    name: string;
    age: number;
}
function printName(person: Person) {
    console.log(person.name);
}

// É uma descricao de atributos e de metodos que um objeto deve ter.

const john = {name: 'John', age: 21};
const mary = {name: 'Mary', age: 21, phone: '123-45678'};

printName(john);
printName(mary);