// NOMES DE METODOS ABREVIADOS(short method names):
// Permite que declaremos FUNCOES dentro de OBJETOS, como se eles fossem PROPRIEDADES.

const hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};

console.log(hello.printHello());
