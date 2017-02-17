/**
 * Created by bitholic on 2017/2/16.
 */

'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchHeaderComp from '../components/SearchHeaderComp';
import { inputQuestion, submitQuestion } from '../actions/questionAction';

export default connect(
    (state) => ({
        question: state.question,
    }),
    (dispatch) => (bindActionCreators({
        inputQuestion,
        submitQuestion,
    }, dispatch))
)(SearchHeaderComp);