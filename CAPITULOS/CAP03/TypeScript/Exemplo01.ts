interface Person {
    name: string;
    age: number;
}

const friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

function comparePerson(a: Person, b: Person) {
    // funcao comparePerson
}

// Ao declarar a interface Person, garantimos que a funcao comparePerson receba somente objetos que tenham name e age.