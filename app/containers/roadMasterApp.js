/**
 * Created by bitholic on 2017/2/3.
 */
'use strict';

import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import * as allActions from '../actions';
import {connect} from 'react-redux';
import Counter from '../components/counter';
import Update from '../components/update';

class RoadMasterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {counter, text, increment, decrement, textChanged, updateText} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Update text={text} textChanged={textChanged} updateText={updateText} />
                <Counter counter={counter} increment={increment} decrement={decrement} />
            </View>
        )
    }
}

export default connect(
    (state) => ({
        counter: state.counter.counter,
        text: state.update.text,
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
        updateText: () => dispatch(allActions.updateTextActions.updateText())
    })
)(RoadMasterApp);