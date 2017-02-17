/**
 * Created by bitholic on 2017/2/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    question: '',
    submitted: false,
};

export default function questionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.INPUT_QUESTION:
            return {
                ...state,
                question: action.payload,
                submitted: false,
            };
        case types.SUBMIT_QUESTION:
            return {
                ...state,
                submitted: true,
            };
        default:
            return state;
    }
}