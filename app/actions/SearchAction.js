/**
 * Created by bitholic on 2017/2/16.
 */
import * as types from '../actions/actionTypes';
import fetch from 'isomorphic-fetch';

export const inputQuestion = (question) => ({
    type: types.INPUT_QUESTION,
    payload: question,
});

export function submitQuestion(){
    const request = fetch('http://localhost:8080/answers.json');
    return {
        type: types.SUBMIT_QUESTION,
        payload: request.then(response => response.json())
    }
}