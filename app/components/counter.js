/**
 * Created by bitholic on 2017/2/3.
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {counter, increment, decrement } = this.props;

        return (
            <View>
                <Text>{counter}</Text>
                <Button title='+' onPress={increment}/>
                <Button title='-' onPress={decrement}/>
            </View>
        )
    }
}
