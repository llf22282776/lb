/**
 * Created by bitholic on 2017/2/4.
 */

import * as types from './actionTypes';

export function fetchPending() {
    return {
        type: types.FETCH_DATA_PENDING,
    }
}

export function fetchComp(data) {
    return {
        type: types.FETCH_DATA_FULFILLED,
        data: data,
    }
}

export function fetchErr(data) {
    return {
        type: types.FETCH_DATA_REJECTED,
        data: data,
    }
}
