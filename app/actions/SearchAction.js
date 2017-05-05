/**
 * Created by bitholic on 2017/2/16.
 */
import * as types from '../actions/actionTypes';
//import fetch from 'isomorphic-fetch';

export const changeQuestion = (text) => ({
    type: types.CHANGE_QUESTION,
    payload: text,
});

export const getSearchHistory = () => ({
    type: types.GET_SEARCH_HISTORY,
    payload: storage.load({key: 'searchHistory'}).then(ret => ret),
});

export const deleteHistory = () => ({
    type: types.DELETE_HISTORY,
});

export const getSearchHelp = () => ({
    type: types.GET_SEARCH_HELP,
    payload: fetch('http://localhost:8080/searchHelp.json',{headers: {'Cache-Control': 'no-cache'}}).then(response => response.json()),
});

export const startInputQuestion = () => ({
    type: types.START_INPUT_QUESTION,
});

export const stopInputQuestion = () => ({
    type: types.STOP_INPUT_QUESTION,
});

export const submitQuestion = (question) => ({
    type: types.SUBMIT_QUESTION,
    //payload: fetch('http://localhost:8080/answers.json',{headers: {'Cache-Control': 'no-cache'}}).then(response => response.json())
    payload: fetch('http://bitholic.cn/lubao/api/answers?question='+question, {headers: {'Cache-Control': 'no-cache'}}).then(response => response.json())
});