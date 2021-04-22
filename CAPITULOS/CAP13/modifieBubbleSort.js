import { Compare, defaultCompare, swap } from './util'

function modifieBubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let  i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (compareFn(array[j], array[j + 1] === Compare.BIGGER_THAN)) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}