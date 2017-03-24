/**
 * Created by bitholic on 2017/3/1.
 */
'use strict';

import React, {Component} from 'react';
import {View, Image, TextInput} from 'react-native';
import {
    Container,
    Content,
    Header,
    Title,
    Left,
    Body,
    Right,
    Thumbnail,
    Card,
    CardItem,
    Item,
    Icon,
    Input,
    Button,
    Text
} from 'native-base';

export default class AddQuestionPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => {
                            this.props.pop()
                        }}>
                            <Text style={{fontSize: 16}}>取消</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Title>提问</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => {
                            this.props.pop()
                        }}>
                            <Text style={{fontSize: 16}}>确定</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Item>
                        <Input placeholder='请输入问题标题，以问号结尾'/>
                    </Item>
                    <Item>
                        <Input placeholder='请输入问题的详细描述'/>
                    </Item>
                </Content>
            </Container>
        )
    }
}
