/**
 * Created by bitholic on 2017/2/2.
 */

import React, { Component } from 'react';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import RoadMasterApp from './roadMasterApp'
import * as reducers from '../reducers'

const reducer = combineReducers(reducers);
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <RoadMasterApp />
            </Provider>
        )
    }
}

/*
import { connect } from 'react-redux';
import { createStore, bindActionCreators} from 'redux';


const initialState = {
    counter: 0,
};

//reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
            break;
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
            break;
    }
    return state;
};

const store = createStore(reducer);

//组件卸载时注意停止store的监听,以免影响性能
store.subscribe(() => console.log(store.getState()));

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Text>{this.props.counter}</Text>
                    <Button title='INC' onPress={() => store.dispatch({type: 'INCREMENT'})}/>
                    <Button title='DEC' onPress={() => store.dispatch({type: 'DECREMENT'})}/>
                </View>
            </Provider>
        )
    }
}

export default connect(state => ({
        counter: state.counter,
}),
    (dispatch) => ({
        actions: bindActionCreators()
    }))(App);

  */
