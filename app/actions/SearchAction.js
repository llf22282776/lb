/**
 * Created by bitholic on 2017/2/16.
 */
import * as types from '../actions/actionTypes';

export function changeQuestion(text) {
    return {
        type: types.CHANGE_QUESTION,
        payload: text,
    }
}

export function getSearchHelp(){
    const request = fetch('http://localhost:8080/searchHelp.json');
    return {
        type: types.GET_SEARCH_HELP,
        payload: request.then(response => response.json()),
    }
}

export function startInputQuestion(){
    return {
        type: types.START_INPUT_QUESTION,
    }
}

export function stopInputQuestion(){
    return {
        type: types.STOP_INPUT_QUESTION,
    }
}

export function submitQuestion() {
    const request = fetch('http://localhost:8080/answers.json');
    return {
        type: types.SUBMIT_QUESTION,
        payload: request.then(response => response.json()),
    }
}