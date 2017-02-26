/**
 * Created by bitholic on 2017/2/16.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    question: '',
    fetching: false,
    inputting: false,
    searchHelpFetched: false,
    searchHistoryFetched: false,
    answers: [],
    searchHelps: [],
    searchHistory: [],
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
        case types.GET_SEARCH_HISTORY_FULFILLED:
            return {
                ...state,
                searchHistory: action.payload.history,
                searchHistoryFetched: true,
            };
        case types.GET_SEARCH_HISTORY_REJECTED:
            return {
                ...state,
                searchHistoryFetched: false,
            };
        case types.DELETE_HISTORY:
            storage.remove({key: 'searchHistory'});
            return {
                ...state,
                searchHistory: [],
            };
        case types.GET_SEARCH_HELP_FULFILLED:
            return {
                ...state,
                searchHelps: action.payload,
                searchHelpFetched: true,
            };
        case types.GET_SEARCH_HELP_REJECTED:
            return {
                ...state,
                searchHelpFetched: false,
            };
        case types.SUBMIT_QUESTION_PENDING:
            state.searchHistory[state.searchHistory.length] = state.question;  //faster than push on samll arrays
            storage.save({
                key: 'searchHistory',
                rawData: {history: state.searchHistory},
            });
            return {
                ...state,
                fetching: true,
                inputting: false,
                answers: [],
                error: undefined
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