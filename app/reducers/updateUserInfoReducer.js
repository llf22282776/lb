/**
 * Created by 鳌天 on 2017/3/1.
 */

import * as types from '../actions/actionTypes';

const initialState = {
	user:{
		username:'',
		password:'',
		email:'',
		sex:'',
		error:undefined,
		account:''
	},
	fetching: false
};

export default function userInfoReducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.UPDATE_USER_NAME:
			return Object.assign({},state,action.payload);
		case types.UPDATE_EMAIL:
			return Object.assign({},state,action.payload);
		case types.UPDATE_PASSWORD:
			return Object.assign({},state,action.payload);
		case types.GET_USER:
			return Object.assign({},state,action.payload)
	}
}