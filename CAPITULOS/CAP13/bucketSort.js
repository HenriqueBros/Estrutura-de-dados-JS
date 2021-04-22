// Ordenação com distribuição
// BUCKET (arrays menores)

function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array;
    }
    const buckets = createBukects(array, bucketSize);
    return sortBukets(buckets);
}

function createBukects(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    const buckectCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < buckectCount; i++) {
        buckets[i] = [];
    }
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(array[i]);
    }
    return buckets;
}

function sortBukets(buckets) {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i]);
            sortedArray.push(...buckets[i]);
        }
    }
    return sortedArray;
}