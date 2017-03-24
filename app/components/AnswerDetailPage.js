/**
 * Created by bitholic on 2017/2/27.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Alert} from 'react-native';
import {
    StyleProvider,
    Container,
    Header,
    Title,
    Content,
    Card,
    CardItem,
    Text,
    Button,
    Left,
    Body,
    Right,
    Icon,
} from 'native-base';

export default class AnswerDetailPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.pop()}>
                            <Icon name='ios-arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>回答</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={
                            () => {
                                Alert.alert('', '更多', [
                                    {text: '👍赞这个答案', onPress: () => Alert.alert('点赞成功', '', 'OK')},
                                    {text: '寻求社区帮助', onPress: () => console.log('callback Pressed!')},
                                    {text: '取消'},
                                ]);
                            }}>
                            <Icon name='ios-more'/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card>
                        <CardItem header bordered>
                            <Text style={{color: '#000'}}>{this.props.question}</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text>{this.props.answer}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontSize: 10}}>如果没有解答您的问题，可尝试变换句式重新搜索！</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    renderItems(items) {
        return items.map((item, index) => {
            return (
                <CardItem key={index} bordered>
                    <Body>
                    <Text>{item}</Text>
                    </Body>
                </CardItem>
            )
        })
    }
}