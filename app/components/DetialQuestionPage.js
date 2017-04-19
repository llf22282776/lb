'use strict';

import React, { Component } from 'react';
import {
    View,
    Image,
    ListView
} from 'react-native';
import {
    Container,
    Content,
    Header,
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
import * as serverAddress from "../util/serverAddress"
var commitList_temp = [
    {
        contentText: '受教育了',
        nick: "b",
        date: "11h ago",

    },
    {

        titleText: '谢谢',
        nick: "c",
        date: "11h ago"
    }

];
export default class DetialQuestionPage extends Component {
    constructor(props) {

        super(props);
        this.returnLastOne = this.returnLastOne.bind(this);
        this.commitOneQuestion = this.commitOneQuestion.bind(this);
        this.toGetCommit = this.toGetCommit.bind(this);
        this.renderCommits = this.renderCommits.bind(this);
        this.fetchCommentList = this.fetchCommentList.bind(this);
        this.callBack_ADDCOMMENT=this.callBack_ADDCOMMENT.bind(this);
        this.imageRender=this.imageRender.bind(this);
        this.state = {
            dq_ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            commentList: []

        }//初始化评论表
        console.log(this.props);
        this.toGetCommit(this.props.cid);


    }
    render() {
       

        return (
            <Container>
                <Header>
                    <Left>
                        <Button iconLeft transparent onPress={this.returnLastOne}>
                            <Icon name="ios-arrow-back" style={{ fontSize: 26 }} />
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <Card>
                        <CardItem header bordered style={{ paddingBottom: 4 }}>
                            <Left>
                                <Thumbnail source={require('../resources/user_selected.png')} />
                                <Body>
                                    <Text>{this.props.titleText}</Text>
                                    <Text note>{this.props.nick}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        {
                            this.imageRender(this.props)


                        }
                        <CardItem content style={{ paddingBottom: 4 }} >
                            <Text>{this.props.contentText}</Text>
                        </CardItem>
                        <CardItem footer style={{ paddingBottom: 4 }}>
                            <Left>
                                <Button transparent iconLeft>
                                    <Icon active name="thumbs-up" />
                                    <Text>{this.props.supportNum}</Text>
                                </Button>
                                
                                <Button transparent iconLeft>
                                    <Icon active name="chatbubbles" />
                                    <Text>{this.props.commitNums}</Text>
                                </Button>
                                
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Text>{this.props.date}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem content>
                            <Left>
                                <Text> </Text>
                            </Left>
                            <Body>
                                <Button iconLeft transparent onPress={this.commitOneQuestion}>
                                    <Icon active name="md-create" />
                                </Button>
                            </Body>
                            <Right>
                                <Text> </Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <ListView enableEmptySections dataSource={(this.state.dq_ds).cloneWithRows(this.state.commentList)} renderRow={this.renderCommits} />
                </Content>
            </Container>
        );




    }
    commitOneQuestion() {
        //回答，写问题,跳转界面
        var jsonObj = {
            key: "answerToQuestion",
            props: {
                titleText: this.props.titleText, //把题目穿进去
                cid:this.props.cid,
                call_back:this.callBack_ADDCOMMENT
            }
        };
        this.props.push(jsonObj);


    }
    callBack_ADDCOMMENT(commentList){
        //更新
        this.setState({commentList:commentList});


    }
    toGetCommit(cid) {
        //从服务器搞来评论
        this.fetchCommentList(cid);

    }
   async fetchCommentList(cid1) {
        //获取一次评论

        var url = serverAddress.SERVER_ROOT + serverAddress.GET_COMMENTLIST_JSON;
        try {
            let response = await fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cid: cid1
                    })
                });
              console.log("评论response");
             console.log(response);

            let data = await response.json();
             console.log("评论json");
             console.log(data);

            var data = data.commentList;//从这个字段取东西
            this.setState({ conversionList: data });
            
        } catch (e) {
            //异常
            console.log(e);
        }

    }
    returnLastOne() {
        this.props.pop();//返回

    }
    renderCommits(data) {
        console.log("正在加载评论！！！！！！！！");
        //显示评论
        return (
            <Card >
                <CardItem header bordered style={{ paddingBottom: 4 }} >
                    <Left>
                        <Thumbnail source={require('../resources/qa_selected.png')} />
                        <Body>
                            <Text note>{data.nick}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem content style={{ paddingBottom: 4 }}>
                    <Text>{data.contentText}</Text>
                </CardItem>
                <CardItem footer style={{ paddingBottom: 4 }}>
                    <Body>
                    </Body>
                    <Right>
                        <Text>{data.date}</Text>
                    </Right>
                </CardItem>
            </Card>

        );

    }

  imageRender(rowData) {

        console.log("图片地址" + rowData.url);
        if (rowData.url == "" || rowData.url === "" || rowData.url == null) {
            return null;
        }
        else {
            return (
                <CardItem cardBody >
                    <Image style={{ height: 120, width: 400 }} source={{ uri: serverAddress.SERVER_ROOT + serverAddress.IMAGE_ROOT + rowData.url }} />
                </CardItem>
            );
        }
    }






}

/**
 * 
 * <Content>
                    <Card>
                        <CardItem header style={{ paddingBottom: 4 }} >
                            <Left>
                                <Thumbnail source={require('../resources/qa_selected.png')} />
                                <Body>
                                    <Text>{this.props.titleText}</Text>
                                    <Text note>{this.props.nick}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem content style={{ paddingBottom: 4 }}>
                            <Text>{this.props.contentText}</Text>
                        </CardItem>
                        <CardItem footer style={{ paddingBottom: 4 }}>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>{this.props.supportNum}</Text>
                                </Button>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>{this.props.commitNums}</Text>
                                </Button>
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Text>{this.props.date}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem content>
                            <Button iconLeft onPress={this.commitOneQuestion}>
                                <Icon active name="pencil" />
                                <Text>回答</Text>
                            </Button>
                        </CardItem>
                    </Card>
                   
                </Content>
 *  <ListView dataSource={this.state.dq_ds.cloneWithRows(this.state.commitList)} renderRow={this.renderCommits} />
 * 
*/