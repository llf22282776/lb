/**
 * Created by bitholic on 2017/2/16.
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchPageComp from '../components/SearchPageComp';
import { changeQuestion, getSearchHelp, startInputQuestion, stopInputQuestion, submitQuestion } from '../actions/SearchAction';

export default connect(
    (state) => ({
        search: state.search,
    }),
    (dispatch) => (bindActionCreators({
        changeQuestion,
        getSearchHelp,
        startInputQuestion,
        stopInputQuestion,
        submitQuestion,
    }, dispatch))
)(SearchPageComp);