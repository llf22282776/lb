/**
 * Created by bitholic on 2017/2/2.
 */

import React, { Component } from 'react';
import {createStore,applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import RoadMasterApp from './roadMasterApp'
import AppNavigator from './appNavigator';
import * as reducers from '../reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

const reducer = combineReducers(reducers);
const store = createStore(reducer, middleware);

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <RoadMasterApp />
            </Provider>
        )
    }
}
