/**
 * Created by bitholic on 2017/2/2.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './createStore';
import NavigatorContainer from './containers/HomePageContainer';

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <NavigatorContainer />
            </Provider>
        )
    }
}
