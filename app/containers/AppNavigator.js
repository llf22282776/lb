/**
 * Created by bitholic on 2017/2/9.
 */

'use strict';

import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppNavigatorComp from '../components/AppNavigatorComp';
import AppTabNaviComp from '../components/AppTabNaviComp';
import { tab } from '../actions/appNavigationAction';

const { StateUtils } = NavigationExperimental;

export default connect(
    (state) => {
        //navigation: state.navigation,
        const homeState = StateUtils.get(state.navigation, 'home');
        return {
            selectedTab: homeState ? homeState.routes[homeState.index].key : 'home'
        }
    },
    (dispatch) => (bindActionCreators({
        tab,
    }, dispatch))
)(AppTabNaviComp);
