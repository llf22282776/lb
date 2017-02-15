/**
 * Created by bitholic on 2017/2/4.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: ''
};

export default function loadDataReducer(state = initialState, action = {}){
    switch(action.type) {
        case types.FETCH_DATA_PENDING:
            return {
                ...state,
                fetching: true,
            };
        case types.FETCH_DATA_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload,
            };
        case types.FETCH_DATA_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload.message,
            };
        default:
            return state;
    }
}

