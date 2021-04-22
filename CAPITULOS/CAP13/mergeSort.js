// Complexidade O(n logn)
import { defaultCompare } from './util'

function mergeSorte(array, CompareFn = defaultCompare) {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSorte(array.slice(0, middle), CompareFn);
        const right = mergeSorte(array.slice(middle, length), CompareFn);
        array = merge(left, right, CompareFn);
    }
    return array;
}