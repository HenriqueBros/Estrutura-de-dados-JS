// O segundo conceito de interface no TypeScript esta relacionado a programacao orientada a objetos
// como Java, C#, Ruby. Uma interface é um contrato.
// Podemos definir o comportamento que as CLASSES ou INTERFACES devem ter.

interface Comparable {
    compareTo(b): number;
}

class MyObject implements Comparable {
    age: number;
    compareTo(b): number {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}

// Muito usado em algoritimos de Ordenacao.