/**
 * Created by bitholic on 2017/2/16.
 */

'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchPage from '../components/SearchPage';
import {
    changeQuestion,
    getSearchHistory,
    deleteHistory,
    getSearchHelp,
    startInputQuestion,
    stopInputQuestion,
    submitQuestion
} from '../actions/SearchAction';

export default connect(
    (state) => ({
        search: state.search,
    }),
    (dispatch) => ({
        changeQuestion: (text) => dispatch(changeQuestion(text)),
        getSearchHistory: () => dispatch(getSearchHistory()).catch(err => {
        }),
        deleteHistory: () => dispatch(deleteHistory()),
        getSearchHelp: () => dispatch(getSearchHelp()).catch(err => {
        }),
        startInputQuestion: () => dispatch(startInputQuestion()),
        stopInputQuestion: () => dispatch(stopInputQuestion()),
        submitQuestion: () => dispatch(submitQuestion()).catch(err => {
        }),
    }),
)(SearchPage);