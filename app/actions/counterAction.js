/**
 * Created by bitholic on 2017/2/3.
 */

import * as types from './actionTypes';

export function increment() {
    return {
        type: types.INC,
    };
}

export function decrement() {
    return {
        type: types.DEC,
    };
}
