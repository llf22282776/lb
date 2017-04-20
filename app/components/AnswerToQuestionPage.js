'use strict';

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
    InputGroup
} from 'native-base';
import * as serverAddress from "../util/serverAddress"
export default class AnswerToQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.returnLastOne = this.returnLastOne.bind(this);
        this.commitOneQuestion = this.commitOneQuestion.bind(this);
        this.changeTextEvent = this.changeTextEvent.bind(this);

        this.getNowFormatDate = this.getNowFormatDate.bind(this);
        this.state = {
            contentText: ""


        }
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button iconLeft transparent onPress={this.returnLastOne}>
                            <Icon name="ios-arrow-back" style={{ fontSize: 26 }} />
                            <Text style={{ fontSize: 16 }}>取消</Text>
                        </Button>
                    </Left>

                    <Right>
                        <Button iconRight transparent onPress={this.commitOneQuestion}>
                            <Icon name="ios-checkmark-outline" style={{ fontSize: 26 }} />
                            <Text style={{ fontSize: 16 }}>确定</Text>

                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card transparent>
                        <CardItem >
                            <InputGroup disabled>
                                <Input placeholder={this.props.titleText} />
                            </InputGroup >
                        </CardItem>
                        <CardItem >
                            <InputGroup rounded>
                                <Input style={{ height: 300, width: 300, textAlignVertical: "top" }} multiline={true} placeholder="请输入内容..." onChangeText={this.changeTextEvent} />
                            </InputGroup >
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button iconLeft transparent>
                                    <Icon name="menu" />
                                </Button>
                                <Button iconLeft transparent>
                                    <Icon name="ios-image" />
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );


    }
    returnLastOne() {
        this.props.pop();//返回上个界面
    }
    async commitOneQuestion() {
        var url = serverAddress.SERVER_ROOT + serverAddress.INSERT_COMMENT + "?" + "nid=" + serverAddress.nid + "&" + "cid=" + this.props.cid + "&" + "content=" + this.state.contentText + "&" + "date=" + this.getNowFormatDate();
        try {
            let response = await fetch(
                url,
                {
                    method: "GET"

                });
            console.log("评论response");
            console.log(response);

            let data = await response.json();
            console.log("评论json");
            console.log(data);

            var data = data.commentList;//从这个字段取东西
            this.call_back();
            this.setState({ commentList: data });
            this.returnLastOne();//返回界面

        } catch (e) {
            //异常
            Alert.alert(e);
        }





    }
    changeTextEvent(text) {
        this.setState({ contentText: text });

    }


    commitSuccess() {
        //fetch成功,取评论条，放到Json里面

        DeviceEventEmitter.emit('commitSuccess', avatarUrl);
    }

    getNowFormatDate() {
        var day = new Date();
        var Year = 0;
        var Month = 0;
        var Day = 0;
        var CurrentDate = "";
        var hours;
        var mins;
        var second;
        //初始化时间
        //Year= day.getYear();//有火狐下2008年显示108的bug
        Year = day.getFullYear();//ie火狐下都可以
        Month = day.getMonth() + 1;
        Day = day.getDate();
        hours = day.getHours();
        mins = day.getMinutes();
        second = day.getSeconds();
        //Hour = day.getHours();
        // Minute = day.getMinutes();
        // Second = day.getSeconds();
        CurrentDate += Year + "-";
        if (Month >= 10) {
            CurrentDate += Month + "-";
        }
        else {
            CurrentDate += "0" + Month + "-";
        }
        if (Day >= 10) {
            CurrentDate += Day;
        }
        else {
            CurrentDate += "0" + Day;
        }
        CurrentDate += " "
        if (hours >= 10) {
            CurrentDate += hours;
        }
        else {
            CurrentDate += "0" + hours;
        }
        CurrentDate += ":"
        if (mins >= 10) {
            CurrentDate += mins;
        }
        else {
            CurrentDate += "0" + mins;
        }
        CurrentDate += ":"
        if (second >= 10) {
            CurrentDate += second;
        }
        else {
            CurrentDate += "0" + second;
        }

        console.log(CurrentDate);
        return CurrentDate;
    }
    removeYearsAndSecond(rowData) {
        var newDate = rowData.date;
        //Alert.alert(newDate);
        var stringList = newDate.split("-");//第一个是年,第二个是月

        var mouth = stringList[1];


        var str1 = stringList[2];

        var stringList1 = str1.split(" ");//第一个是天
        var day = stringList1[0];
        str1 = stringList1[1];

        var stringList2 = str1.split(":");//第一个是时，第二个是分，第三个是秒
        var hours = stringList2[0];
        var mins = stringList2[1];
        var sec = stringList2[2];
        newDate = mouth + "-" + day + " " + hours + ":" + mins;

        return (<Right><Text>{newDate}</Text></Right>);

    }
}