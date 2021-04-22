import { Compare, defaultCompare, swap, defaultEqual } from './util'

const DOES_NOT_EXIST = -1;
function sequencialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = i; i < array.length; i++) {
        if (equalsFn(value,array[i])) {
            return i;
        }
    }
    return DOES_NOT_EXIST;
}