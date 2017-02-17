/**
 * Created by bitholic on 2017/2/15.
 */
/*
import { tabReducer } from 'react-native-navigation-redux-helpers';

const tabs = {
    index: 0,
    routes: [
        {key: 'home', title: '首页'},
        {key: 'community', title: '社区'},
        {key: 'qa', title: '问答'},
        {key: 'message', title: '消息'},
        {key: 'my', title: '我'},
    ],
};

module.exports = tabReducer(tabs);
*/

import * as types from '../actions/actionTypes';
import {NavigationExperimental} from 'react-native';

const {StateUtils} = NavigationExperimental;

const routes = {
    home: {
        key: 'home',
        title: '路宝首页',
        index: 2,
        routes: [
            {key: 'home'},
            {key: 'community'},
            {key: 'qa'},
            {key: 'message'},
            {key: 'my'},
        ]
    },
    community: {
        key: 'community',
        title: '社区',
    },
    qa: {
        key: 'qa',
        title: '问答'
    },
};

const initialState = {
    index: 0,
    routes: [
        routes.home
    ]
};

export default function appNavigationReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.NAVIGATION_PUSH:
            return StateUtils.push(state, routes[action.payload]);
        case types.NAVIGATION_POP:
            return StateUtils.pop(state);
        case types.NAVIGATION_TAB:
            const homeState = StateUtils.get(state, 'home');
            const updateHomeState = StateUtils.jumpTo(homeState, action.payload);
            return StateUtils.replaceAt(state, 'home', updateHomeState);
        default:
            return state;
    }
}
