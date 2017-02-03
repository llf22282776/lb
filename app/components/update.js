/**
 * Created by bitholic on 2017/2/3.
 */

import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class Update extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, textChanged, updateText} = this.props;

        return (
            <View>
                <TextInput style={{height: 40}} onChangeText={(text) => textChanged(text)} />
                <Text>{text}</Text>
                <Button title="update" onPress={updateText} />
            </View>
        );
    }
}
