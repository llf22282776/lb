'use strict';

import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
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
        this.changeTextEvent=this.changeTextEvent.bind(this);
        this.fetchInsertComment=this.fetchInsertComment.bind(this);
        this.state={
            contentText:""


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
                                <Input  placeholder={this.props.titleText}/>
                            </InputGroup >
                        </CardItem>
                        <CardItem >
                            <InputGroup rounded>
                                <Input style={{ height: 300, width: 300, textAlignVertical: "top" }} multiline={true} placeholder="请输入内容..."  onChangeText={this.changeTextEvent}/>
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
    commitOneQuestion() {
        //发表评论,

        /**
         * 
         * 发表后，首先fetch
         * fetch成功，取新评论（不是原评论），取完之后，放到
         * DeviceEventEmitter.emit('changeAvatar’,avatarUrl);告诉上个界面修改了事件
         * pop
         * 
        */
       
        this.returnLastOne();//返回界面
        


    }
    changeTextEvent(text){
        this.setState({contentText:text});

    }
    async fetchInsertComment(){
          var url = serverAddress.SERVER_ROOT + serverAddress.INSERT_COMMENT;
        try {
            let response = await fetch(
                url,
                {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nid:serverAddress.nid,
                        cid: this.props.cid,
                        content:this.state.contentText,
                        date:new Date().formdata("yyyy-mm-dd")

                        
                    })
                });
            let data = response.json();
            var data = data.commentList;//从这个字段取东西
            this.setState({ conversionList: data });
            console.log(data);
        } catch (e) {
            //异常
            console.log(e);
        }



    }

    commitSuccess(){
        //fetch成功,取评论条，放到Json里面
        
         DeviceEventEmitter.emit('commitSuccess',avatarUrl);
    }



}