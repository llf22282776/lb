import React, {Component} from 'react';
import {
    Button,
    Container,
    Thumbnail,
    Text,
    Title,
    Content,
    ListItem,
    Left,
    Body,
    Right,
    Card,
    Icon,
    CardItem
} from 'native-base';
import {View} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicShow: false,
            username: "test_user",
            account: "130666"
        }

        this.styles = {
            rowButton: {
                height: 100,
                flex: 1
            }
        }
    }

    topicClick = () => {
        this.setState({topicShow: !this.state.topicShow});
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem button onPress={()=>{this.props.push({key:'userDetail'})}}>
                            <Left>
                                <Thumbnail source={require('../resources/1.png')}/>
                                <Body>
                                <Text>test</Text>
                                <Text note>1308-504-9985</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward"/>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Grid>
                                <Row>
                                    <Col>
                                        <View style={{alignItems: 'center'}}>
                                            <Text note>我的回答</Text>
                                            <Text note>0</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View style={{alignItems: 'center'}}>
                                            <Text note>我的提问</Text>
                                            <Text note>0</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View style={{alignItems: 'center'}}>
                                            <Text note>获得的赞同</Text>
                                            <Text note>0</Text>
                                        </View>
                                    </Col>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                    <ListItem itemDivider style={{backgroundColor: 'transparent'}}/>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-mail-outline"/>
                        </Left>
                        <Body>
                        <Text>我的消息</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{backgroundColor: 'transparent'}}/>
                    <ListItem icon button onPress={()=>{this.props.push({key:'setting'})}}>
                        <Left>
                            <Icon name="ios-settings-outline"/>
                        </Left>
                        <Body>
                            <Text>设置</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-car-outline"/>
                        </Left>
                        <Body>
                            <Text>我的车辆</Text>
                        </Body>
                        <Right>
                            <Text>暂未绑定</Text>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-chatbubbles-outline"/>
                        </Left>
                        <Body>
                        <Text>话题管理</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{backgroundColor: 'transparent'}}/>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-information-circle-outline"/>
                        </Left>
                        <Body>
                        <Text>关于</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-share-outline"/>
                        </Left>
                        <Body>
                        <Text>分享</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{backgroundColor: 'transparent'}}/>
                    <ListItem button onPress={this.props.pop}>
                        <Body>
                            <Title style={{color: 'red'}}>退出登录</Title>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

/*
 <Card>
 <CardItem>
 <Card>
 <CardItem >
 <Thumbnail style={{marginRight: 20}} size={120}
 source={require('../resources/1.png')}/>
 <Card>
 <CardItem button>
 <Text>{this.state.username}</Text>
 <Right>
 <Icon name="ios-arrow-forward" style={{marginRight: 0}}/>
 </Right>
 </CardItem>
 <CardItem button>
 <Text>路宝账户：{this.state.account}</Text>
 </CardItem>
 </Card>
 </CardItem>
 </Card>
 </CardItem>
 <CardItem itemDvider/>
 <CardItem button>
 <Icon name="ios-car"/>
 <Text>绑定车辆</Text>
 <Icon name="ios-arrow-forward"/>
 </CardItem>
 <CardItem itemDvider/>
 {() => {
 if (this.state.topicShow) {
 return (
 <CardItem button onClik={this.topicClick}>
 <Icon name="ios-eye"/>
 <Text>关注话题</Text>
 <Icon name="ios-arrow-down"/>
 </CardItem>
 )
 }
 else {
 return (
 <Content>
 <CardItem button>
 <Text>#吐槽#</Text>
 </CardItem>
 <CardItem button>
 <Text>#汽车保养#</Text>
 </CardItem>
 <CardItem button>
 <Text>#追责#</Text>
 </CardItem>
 </Content>
 )
 }
 }}
 <CardItem button>
 <Icon name="ios-settings"/>
 <Text>设置</Text>
 <Icon name="ios-arrow-forward"/>
 </CardItem>
 <CardItem button>
 <Icon name="ios-notifications"/>
 <Text>通知</Text>
 <Icon name="ios-arrow-forward"/>
 </CardItem>
 </Card>

 */