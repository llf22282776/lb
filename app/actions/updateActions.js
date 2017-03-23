/**
 * Created by 鳌天 on 2017/3/1.
 */

import * as types from '../actions/actionTypes';
import fetch from 'isomorphic-fetch';

export const updateUserName = (text) => ({
	type:types.UPDATE_USER_NAME,
	payload:text
});

export const updatePassWord = (text) => ({
	type:types.UPDATE_PASSWORD,
	payload:text
});

export const updateEmail = (text) => ({
	type:types.UPDATE_EMAIL,
	payload:text
});

export const getUser = (username) => ({
	type:types.GET_USER,
	payload:fetch('http://localhost:8080/user.json',{headers: {'Cache-Control': 'no-cache'}}).then(response => response.json())
});