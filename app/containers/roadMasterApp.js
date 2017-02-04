/**
 * Created by bitholic on 2017/2/3.
 */
'use strict';

import React, {Component} from 'react';
import {View, Text, TextInput, Button, ListView} from 'react-native';
import * as allActions from '../actions';
import {connect} from 'react-redux';
import Counter from '../components/counter';
import Update from '../components/update';

class RoadMasterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            counter, text, increment, decrement,
            textChanged, updateText,
            async, loadDataAsync
        } = this.props;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Update text={text} textChanged={textChanged} updateText={updateText}/>
                <Counter counter={counter} increment={increment} decrement={decrement}/>
                <Button title="LOAD_DATA_ASYNC" onPress={loadDataAsync}/>
                <Text>loading: {async.fetching.toString()}</Text>
                <Text>loaded: {async.fetched.toString()}</Text>
                <Text>{async.error}</Text>
                <Text>{'load ' + async.users.length + ' users'}</Text>
            </View>
        )
    }
}

export default connect(
    (state) => ({
        counter: state.counter.counter,
        text: state.update.text,
        async: state.async,
    }),
    /*
     (dispatch) => ({
     actions: bindActionCreators(actions, dispatch)
     })
     */
    (dispatch) => ({
        increment: () => dispatch(allActions.counterActions.increment()),
        decrement: () => dispatch(allActions.counterActions.decrement()),
        textChanged: (text) => dispatch(allActions.updateTextActions.textChanged(text)),
        updateText: () => dispatch(allActions.updateTextActions.updateText()),
        loadDataAsync: () => {
            dispatch(allActions.asyncActions.fetchPending());
            fetch('http://localhost:8080/users.json')
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    dispatch(allActions.asyncActions.fetchComp(json))
                })
                .catch((err) => {
                    dispatch(allActions.asyncActions.fetchErr(err.toString()))
                })
        }
    })
)(RoadMasterApp);