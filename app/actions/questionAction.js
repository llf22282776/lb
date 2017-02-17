/**
 * Created by bitholic on 2017/2/16.
 */
import * as types from '../actions/actionTypes';

export const inputQuestion = (question) => ({
    type: types.INPUT_QUESTION,
    payload: question,
});

export const submitQuestion = () => ({
    type: types.SUBMIT_QUESTION,
});