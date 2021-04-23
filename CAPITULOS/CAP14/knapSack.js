function knapSack(capacity, weights, values, n) {
    const kS = [];
    for (let i = 0; i <= n; i++) {
        kS[i] = [];
    }   
    for (let i = 0; i <= n; i++) {
        for( let w = 0; w <= capacity; w++) {
            if (i === 0 && w === 0) {
                kS[i][w] = 0; 
            } else if (weights[i - 1] <= w) {
                const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
                const b = kS[i - 1][w];
                kS[i][w] = a > b ? a : b;
            } else {
                kS[i][w] = kS[i - 1][w];
            }
        }
    }
    findValues(n, capacity, kS, weights, values);
    return kS[2][capacity];
}

function findValues(n, capacity, kS, weights, values) {
    let i = n;
    let k = capacity;
    console.log('Items that are part of the solutions:');
    while (i > 0 && k > 0) {
        if (kS[i][k] !== kS[i - 1][k]) {
            console.log(`item ${i} can be part of the solution w,v: 
            ${weights[i - 1]} , ${values[i - 1]}`);
            i--;
            k -= kS[i][k];
        } else {
            i--;
        }
    }
}

const values = [3, 4, 5],
weights = [2, 3, 4],
capacity = 5,
n = values;
console.log(knapSack(capacity, weights, values, n));