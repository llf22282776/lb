/**
 * Created by bitholic on 2017/2/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    question: '',
    fetching: false,
    inputting: false,
    searchHelpFetching: false,
    answers: [],
    searchHelps: [],
    error: undefined,
};

export default function questionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.CHANGE_QUESTION:
            return {
                ...state,
                inputting: true,
                question: action.payload,
            };
        case types.GET_SEARCH_HELP_PENDING:
            return {
                ...state,
                searchHelpFetching: true,
            };
        case types.GET_SEARCH_HELP_FULFILLED:
            return {
                ...state,
                searchHelpFetching: false,
                searchHelps: action.payload,
            };
        case types.GET_SEARCH_HELP_REJECTED:
            return {
                ...state,
                searchHelpFetching: false,
            };
        case types.START_INPUT_QUESTION:
            return {
                ...state,
                inputting: true,
            };
        case types.STOP_INPUT_QUESTION:
            return {
                ...state,
                inputting: false,
            };
        case types.SUBMIT_QUESTION_PENDING:
            return {
                ...state,
                fetching: true,
                inputting: false,
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