/**
 * Created by bitholic on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    Header,
    Button,
    Icon,
    InputGroup,
    Input,
} from 'native-base';
import {View} from 'react-native';

export default class SearchHeaderComp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {inputQuestion, submitQuestion} = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'row', margin: 0}}>
                <InputGroup>
                    <Icon name="ios-search"/>
                    <Input rounded
                        placeholder="请输入您的问题"
                        onChangeText={(text) => inputQuestion(text)}
                    />
                </InputGroup>
                <Button
                    transparent
                    textStyle={{fontSize: 15}}
                    onPress={() => submitQuestion()}
                >
                    确认
                </Button>
            </View>
        )
    }
}