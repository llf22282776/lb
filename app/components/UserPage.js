
import React, { Component } from 'react';
import { View, Image, TextInput, Alert } from 'react-native';
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
    Text,
    Form,
    InputGroup,
    Badge,
    ListItem
} from 'native-base';
import * as serverAddress from "../util/serverAddress"
import { Grid, Row, Col } from 'react-native-easy-grid';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topicShow: false,
            username: serverAddress.USER.nick,//用户名
            phone: serverAddress.USER.phone,//电话
            sex: serverAddress.USER.sex,//性别
            msgNums: 0,
            hasCar: false,
            carData: {}
        }
        this.getUserMsg = this.getUserMsg.bind(this);
        this.toMsgListPage = this.toMsgListPage.bind(this);
        this.callBack_clearNewMsg = this.callBack_clearNewMsg.bind(this);
        this.renderThumbnail = this.renderThumbnail.bind(this);
        this.call_back = this.call_back.bind(this);
        this.styles = {
            rowButton: {
                height: 100,
                flex: 1
            }
        }
    }

    topicClick = () => {
        this.setState({ topicShow: !this.state.topicShow });
    }
    async getUserMsg() {
        //从服务器获得新消息的数量，然后渲染起来
        var url = serverAddress.SERVER_ROOT + serverAddress.GET_PERSONAL_NEW_MSG_NUM;
        url = url + "?";
        url += "nid=" + serverAddress.USER.nid;
        //console.log("url:" + url);



        try {
            let response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "text/html;charset=UTF-8"
                    }
                });

            let data = await response.json();


            var msgNumsData = data.nums;//从这个字段取东西

            this.setState({ msgNums: msgNumsData })

        } catch (e) {
            //异常
            Alert.alert("错误", "信息数量获取失败");
        }




    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>

                        <CardItem button onPress={() => { this.props.push({ key: 'userDetail' }) }}>
                            {

                                this.renderThumbnail()

                            }

                            <Left style={{ flex: 3 }}>
                                <Text>{this.state.username}</Text>

                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem icon>

                        <Left>
                            <Icon name="ios-mail-outline" />
                        </Left>
                        <Body>

                            <Text>我的消息</Text>

                        </Body>
                        {
                            this.renderMsg()

                        }

                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />

                    <ListItem icon onPress={() => {
                        if (this.state.hasCar == false) {

                            this.props.push(
                                {
                                    
                                    key: 'carBindPage',
                                    props:{
                                        call_back: this.call_back
                                    }
                                });


                        } else {
                            this.props.push(
                                {
                                    key: 'carDetailPage',
                                    props: {

                                        carData: this.state.carData
                                    }
                                });


                        }


                    }}>
                        <Left>
                            <Icon name="ios-car" />
                        </Left>
                        <Body>
                            <Text>我的车辆</Text>
                        </Body>
                        <Right>

                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon button onPress={() => { this.props.push({ key: 'setting' }) }}>
                        <Left>
                            <Icon name="ios-settings-outline" />
                        </Left>
                        <Body>
                            <Text>设置</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-information-circle-outline" />
                        </Left>
                        <Body>
                            <Text>关于</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-share-outline" />
                        </Left>
                        <Body>
                            <Text>分享</Text>
                        </Body>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem button onPress={this.props.pop}>
                        <Body>
                            <Title style={{ color: 'red' }}>退出登录</Title>

                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
    renderThumbnail() {

        if (serverAddress.USER.thumbnail == null || serverAddress.USER.thumbnail == undefined || serverAddress.USER.thumbnail == "")
            return <Thumbnail style={{ width: 100, height: 100 }} source={require('../resources/1.png')} />
        else
            return <Thumbnail style={{ width: 100, height: 100 }} source={{ uri: serverAddress.SERVER_ROOT + serverAddress.IMAGE_ROOT_PEOPLE + serverAddress.USER.thumbnail }} />

    }
    renderMsg() {
        //显示消息数
        if (this.state.msgNums > 0) {
            //消息数
            return (
                <Right>
                    <Badge>
                        <Text>{this.state.msgNums}</Text>
                    </Badge>
                    <Button transparent onPress={this.toMsgListPage} >
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </Right>);

        } else if (serverAddress.USER.msgNums > 0) {
            return (
                <Right>
                    <Badge>
                        <Text>{serverAddress.USER.msgNums}</Text>
                    </Badge>
                    <Button transparent onPress={this.toMsgListPage} >
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </Right>);

        } else {

            return (
                <Right>
                    <Button transparent onPress={this.toMsgListPage}>
                        <Icon name="ios-arrow-forward" />
                    </Button>
                </Right>
            );

        }





    }
    call_back(data) {
        //
        this.setState(
            {
                carData: data,
                hasCar: true
            }
        );

    }
    async  toMsgListPage() {
        //到消息列表页
        //从服务器获得新消息的数量，然后渲染起来
        var url = serverAddress.SERVER_ROOT + serverAddress.GET_PERSONAL_NEW_MSG;
        url = url + "?";
        url += "nid=" + serverAddress.USER.nid;
        try {
            let response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "text/html;charset=UTF-8"
                    }
                });

            var data = await response.json();
            data.call_back = this.callBack_clearNewMsg;

            var jsonObj = {
                key: "newMsgListPage",
                props: data
            };
            this.props.push(jsonObj);//进入列表页面

        } catch (e) {
            //异常
            Alert.alert("错误", "新消息列表拉取失败");



        }


    }
    callBack_clearNewMsg() {
        this.setState({ msgNums: 0 });//拉取一下新消息


    }

}
