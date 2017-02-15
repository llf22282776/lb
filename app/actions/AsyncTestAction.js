/**
 * Created by bitholic on 2017/2/4.
 */

import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export function fetchData() {
    const request = fetch('http://localhost:8080/users.json');
    return {
        type: types.FETCH_DATA,
        payload: request.then((response) => response.json())
    }
}

export function fetchPending() {
    return {
        type: types.FETCH_DATA_PENDING,
    }
}

export function fetchComp(data) {
    return {
        type: types.FETCH_DATA_FULFILLED,
        payload: data,
    }
}

export function fetchErr(data) {
    return {
        type: types.FETCH_DATA_REJECTED,
        payload: data,
    }
}
