import { Compare, defaultCompare } from './util'

function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let temp;
    for (let i = 0; i < length; i++) {
        let j = i;
        temp = array[i];
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}