interface Comparable<T> {
    compareTo(b: T): number;
}

// Ao passar o tipo T dinamicamente para a interface COMPARABLE usando o operador <>,
// podemos especificar o tipo de ARGUMENTO da funcao.

class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}

// É util para que possamos GARANTIR que estamos comparando OBJETOS do mesmo TIPO.