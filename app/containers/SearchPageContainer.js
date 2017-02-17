/**
 * Created by bitholic on 2017/2/16.
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchPageComp from '../components/SearchPageComp';
import { inputQuestion, submitQuestion } from '../actions/SearchAction';

export default connect(
    (state) => ({
        search: state.search,
    }),
    (dispatch) => (bindActionCreators({
        inputQuestion,
        submitQuestion,
    }, dispatch))
)(SearchPageComp);