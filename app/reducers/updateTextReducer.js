/**
 * Created by bitholic on 2017/2/3.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    text: '输入内容后更新',
};

export default function updateTextReducer (state = initialState, action = {}){
    switch (action.type) {
        case types.TEXT_CHANGED:
            return {
                ...state,
                text: action.payload,
            };
        case types.UPDATE_TEXT:
            return {
                ...state,
                text: 'updated',
            };
        default:
            return state;
    }
}
