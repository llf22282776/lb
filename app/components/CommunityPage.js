/**
 * Created by bitholic on 2017/2/26.
 */
'use strict';

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, Header,Left, Body, Right, Thumbnail, Card, CardItem, Item, Icon, Input, Button, Text} from 'native-base';

export default class CommunityPage extends Component {
    render() {
        return (
            <Content>
                <Header searchBar rounded style={{paddingBottom: 0}}>
                    <Item style={{height: 25}}>
                        <Icon name="search"/>
                        <Input placeholder="Search"/>
                    </Item>
                </Header>
                <View style={{
                    flexDirection: 'row',
                    //backgroundColor: '#CECDD2',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: 34,
                }}>
                    <Button transparent small onPress={() => {this.props.push({key: 'addQuestion'})}}>
                        <Icon name='ios-add' style={{fontSize: 20, color: '#252932'}}/>
                        <Text style={{color: '#252932'}}>提问</Text>
                    </Button>
                    <Button transparent small>
                        <Icon name='ios-create-outline' style={{fontSize: 20, color: '#252932'}}/>
                        <Text style={{color: '#252932'}}>回答</Text>
                    </Button>
                    <Button transparent small>
                        <Icon name='ios-share-outline' style={{fontSize: 20, color: '#252932'}}/>
                        <Text style={{color: '#252932'}}>分享</Text>
                    </Button>
                </View>

                <Card >
                    <CardItem header bordered style={{paddingBottom: 4}}>
                        <Left>
                            <Thumbnail source={require('../resources/user.png')} />
                            <Body>
                            <Text>新手如何克服上路恐惧症？</Text>
                            <Text note>bitholic</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem content style={{paddingBottom: 4}}>
                        <Text>
                            很多新手司机上路，总觉得副驾驶没人指导、提醒，开车时心里会紧张，有时只顾着看路牌，过后才发现闯了红灯，有时忙着看后视镜又发生追尾...
                            或许很多新手司机都会遇到这些开车“难题”，那么我们如何能...
                        </Text>
                    </CardItem>
                    <CardItem footer style={{paddingBottom: 4}}>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4</Text>
                            </Button>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header bordered style={{paddingBottom: 4}}>
                        <Left>
                            <Thumbnail source={require('../resources/user_selected.png')} />
                            <Body>
                            <Text>撞了人之后被敲诈怎么办？</Text>
                            <Text note>Qaing</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody >
                        <Image style={{height: 120}} source={require('../resources/car.jpg')} />
                    </CardItem>
                    <CardItem content style={{paddingBottom: 4}}>
                        <Text>
                            交警做出责任划分！接下来就是伤者的赔偿问题了！如果你的车是全险，就好办多了，先咨询一下保险公司理赔流程！如果不是全险就不大好办了，因为...
                        </Text>
                    </CardItem>
                    <CardItem footer style={{paddingBottom: 4}}>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>1</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>0</Text>
                            </Button>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Text>30min ago</Text>
                        </Right>
                    </CardItem>
                </Card>
                <Card >
                    <CardItem header bordered style={{paddingBottom: 4}}>
                        <Left>
                            <Thumbnail source={require('../resources/qa_selected.png')} />
                            <Body>
                            <Text>新手如何克服上路恐惧症？</Text>
                            <Text note>bitholic</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem content style={{paddingBottom: 4}}>
                        <Text>
                            很多新手司机上路，总觉得副驾驶没人指导、提醒，开车时心里会紧张，有时只顾着看路牌，过后才发现闯了红灯，有时忙着看后视镜又发生追尾...
                            或许很多新手司机都会遇到这些开车“难题”，那么我们如何能...
                        </Text>
                    </CardItem>
                    <CardItem footer style={{paddingBottom: 4}}>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4</Text>
                            </Button>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
