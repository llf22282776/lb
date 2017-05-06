/**
 * Created by bitholic on 2017/2/15.
 */
'use strict';

import * as types from '../actions/actionTypes';
import {NavigationExperimental} from 'react-native';

const {StateUtils} = NavigationExperimental;

const tabs = {
    key: 'home',
    index: 1,
    routes: [
        {key: 'community'},
        {key: 'qa'},
        {key: 'my'},
    ]
};

const initialState = {
    index: 0,
    routes: [
        {key: 'WelcomePage'},
    ]
};

export default function navigatorReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.NAVIGATION_PUSH:
            if(action.payload.key === 'home'){
                return StateUtils.push(state, tabs);
            }else{
                return StateUtils.push(state, action.payload);
            }
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
