/**
 * Created by bitholic on 2017/2/3.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    count: 0,
};

export default function counter(state = initialState, action = {}){
    switch (action.type) {
        case types.INC:
            return {
                ...state,
                count: state.count + 1,
            };
        case types.DEC:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
}
