/**
 * Created by bitholic on 2017/2/3.
 */

import * as types from './actionTypes';

export function textChanged(text) {
    return {
        type: types.TEXT_CHANGED,
        payload: text,
    }
}

export function updateText() {
    return {
        type: types.UPDATE_TEXT,
    }
}

