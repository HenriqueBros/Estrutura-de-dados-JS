var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};

console.log(circleAreaES5(2));

// Simplificando o codigo com Arrow Function

const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};

console.log(circleArea(2));

// funcao sem argumento usa parametro vazio

const hello = () => console.log('hello');
hello();