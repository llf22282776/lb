/**
 * Created by bitholic on 2017/2/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    question: '',
    fetching: false,
    answers: [],
    error: undefined,
};

export default function questionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.INPUT_QUESTION:
            return {
                ...state,
                question: action.payload,
            };
        case types.SUBMIT_QUESTION_PENDING:
            return {
                ...state,
                fetching: true,
                answers: [],
                error: undefined,
            };
        case types.SUBMIT_QUESTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                answers: action.payload,
                error: undefined,
            };
        case types.SUBMIT_QUESTION_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
}