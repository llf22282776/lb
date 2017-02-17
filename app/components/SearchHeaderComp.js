/**
 * Created by bitholic on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    Header,
    Button,
    Icon,
    Item,
    Input,
    Text,
} from 'native-base';

export default class SearchHeaderComp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {inputQuestion, submitQuestion} = this.props;
        return (
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input rounded placeholder="请输入您的问题" onChangeText={(text) => inputQuestion(text)} />
                </Item>
                <Button transparent textStyle={{fontSize: 15}} onPress={() => submitQuestion()}>
                    <Text>搜索</Text>
                </Button>
            </Header>
        )
    }
}