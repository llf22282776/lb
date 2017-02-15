/**
 * Created by bitholic on 2017/2/2.
 */

import React, { Component } from 'react';
import createStore from './createStore';
import { Provider } from 'react-redux';
import RoadMasterApp from './containers/roadMasterApp'
import AppNavigator from './containers/AppNavigator';

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
