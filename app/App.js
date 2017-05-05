/**
 * Created by bitholic on 2017/2/2.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './createStore';
import NavigatorContainer from './containers/NavigatorContainer';
import * as sad from './util/serverAddress'
export default class App extends Component {
    constructor(props){
        super(props);
        sad.msgGetter();
    }
    render() {
        return (
            <Provider store = {store}>
                <NavigatorContainer />
            </Provider>
        )
    }
}
