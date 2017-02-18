/**
 * Created by bitholic on 2017/2/2.
 */

import React, { Component } from 'react';
import createStore from './createStore';
import { Provider } from 'react-redux';
import AppNavigator from './containers/AppNavigator';
import storage from './config/asyncStorage';

const store = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <AppNavigator />
            </Provider>
        )
    }
}
