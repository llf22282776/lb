/**
 * Created by bitholic on 2017/2/3.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    counter: 0,
};

export default function counterReducer(state = initialState, action = {}){
    switch (action.type) {
        case types.INC:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case types.DEC:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}
