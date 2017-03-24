/**
 * Created by 鳌天 on 2017/3/1.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserPage from '../components/UserPage';
import {
	getUser,
	updateEmail,
	updatePassWord,
	updateUserName
} from '../actions/updateActions';

export default connect(
	(state) => ({
		user: state.user,
	}),
	(dispatch) => ({
		getUserName: (text) => dispatch(getUser(text)).catch(err => {}),
		updateEmail: (email) => dispatch(updateEmail(email)),
		updatePassword: (pwd) => dispatch(updatePassWord(pwd)),
		updateUserName: (name) => dispatch(updateUserName(name))
	}),
)(UserPage);