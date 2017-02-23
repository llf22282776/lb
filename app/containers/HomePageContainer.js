/**
 * Created by bitholic on 2017/2/9.
 */

'use strict';

import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
import { tab } from '../actions/navigatorActions';

const { StateUtils } = NavigationExperimental;

export default connect(
    (state) => {
        //navigation: state.navigation,
        const homeState = StateUtils.get(state.navigator, 'home');
        return {
            selectedTab: homeState ? homeState.routes[homeState.index].key : 'qa'
        }
    },
    (dispatch) => (bindActionCreators({
        tab,
    }, dispatch))
)(HomePage);
