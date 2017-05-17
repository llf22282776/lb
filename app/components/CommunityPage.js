/**
 * Created by bitholic on 2017/2/26.
 */
'use strict';

import React, { Component } from 'react';
import { Alert, ListView, View, Image, TextInput } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Thumbnail, Card, CardItem, Item, Icon, Input, Button, Text } from 'native-base';
import * as serverAddress from "../util/serverAddress"
var jsonData = [
    {
        nid: 1,
        cid: 1,
        titleText: "新手如何克服上路恐惧症？",
        contentText: '很多新手司机上路，总觉得副驾驶没人指导、提醒，开车时心里会紧张，有时只顾着看路牌，过后才发现闯了红灯，有时忙着看后视镜又发生追尾...或许很多新手司机都会遇到这些开车“难题”，那么我们如何能...',
        commitNums: 4,
        supportNum: 12,
        nick: "bitholic",
        date: "2017-03-11 13:33:33",
        url: "",
        index: 0,
        isSupprot: false,

    },
    {
        nid: 2,
        cid: 2,
        contentText: " 交警做出责任划分！接下来就是伤者的赔偿问题了！如果你的车是全险，就好办多了，先咨询一下保险公司理赔流程！如果不是全险就不大好办了，因为...",
        titleText: "撞了人之后被敲诈怎么办？",
        commitNums: 0,
        supportNum: 1,
        nick: "qiang",
        date: "2017-03-11 13:33:33",
        url: "1.jpg",
        index: 1,
        isSupprot: false,
    },
    {
        nid: 1,
        cid: 3,
        contentText: "   很多新手司机上路，总觉得副驾驶没人指导、提醒，开车时心里会紧张，有时只顾着看路牌，过后才发现闯了红灯，有时忙着看后视镜又发生追尾...或许很多新手司机都会遇到这些开车“难题”，那么我们如何能...",
        titleText: "新手如何克服上路恐惧症？",
        commitNums: 4,
        supportNum: 12,
        nick: "bitholic",
        date: "2017-03-11 13:33:33",
        url: "",
        index: 2,
        isSupprot: false,
    }
]


var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class CommunityPage extends Component {
    constructor(props) {
        super(props);
        //console.log("CommunityPage this.props");
       // console.log(this.props);
        this.toQuestionDetial = this.toQuestionDetial.bind(this);
        this.fetchCoversion = this.fetchCoversion.bind(this);
        this.mapFunction = this.mapFunction.bind(this);
        this.fetchCoversion = this.fetchCoversion.bind(this);
        this.getCardlistFromCoversionList = this.getCardlistFromCoversionList.bind(this);
        this.EntryKey_pressEVENT = this.EntryKey_pressEVENT.bind(this);
        this.changeText_EVENT = this.changeText_EVENT.bind(this);
        this.fetchSearchCoversion = this.fetchSearchCoversion.bind(this);
        this.callback_ADDQUEST = this.callback_ADDQUEST1.bind(this);
        this.renderSupportIcons = this.renderSupportIcons.bind(this);
        this.imageRender = this.imageRender.bind(this);
        this.removeYearsAndSecond = this.removeYearsAndSecond.bind(this);
        this.supportOrNot = this.supportOrNot.bind(this);
        this.thumbnailRender=this.thumbnailRender.bind(this);
        this.deleteRender=this.deleteRender.bind(this);
        this.state = {
            ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1  == r2 || r1 != r2  }),
            conversionList: [],
            indexCount: 0,
            keyword: "",
            nid: serverAddress.USER.nid,
            refresh: false,

        }
        this.fetchCoversion(serverAddress.USER.nid);
    }
    render() {
        //return之前，先获取帖子，获取随机

        return (
            <Content>
                <Header searchBar rounded style={{ paddingBottom: 0 }}>
                    <Item style={{ height: 25 }}>
                        <Icon name="search" onPress={this.EntryKey_pressEVENT} />
                        <Input placeholder="搜索" onChangeText={this.changeText_EVENT} />

                    </Item>
                </Header>


                <Button block info onPress={() => { this.props.push({ key: 'addQuestion', props: { nid: this.state.nid, call_back: this.callback_ADDQUEST } }) }}>
                    <Icon name='md-create' style={{ fontSize: 20, color: '#ffffff' }} />
                    <Text style={{ color: '#ffffff' }}>来说点啥</Text>
                </Button>


                <ListView enableEmptySections dataSource={this.state.ds.cloneWithRows(this.state.conversionList)} renderRow={this.mapFunction} />
            </Content>
        )
    }
    toQuestionDetial(index) {

        var jsonprops = {
            nid: this.state.conversionList[index].nid,
            cid: this.state.conversionList[index].cid,
            contentText: this.state.conversionList[index].contentText,
            titleText: this.state.conversionList[index].titleText,
            commitNums: this.state.conversionList[index].commitNums,
            supportNum: this.state.conversionList[index].supportNum,
            nick: this.state.conversionList[index].nick,
            date: this.state.conversionList[index].date,
            url: this.state.conversionList[index].url,
            index: this.state.conversionList[index].index,
            callback_ADDQUEST: this.callback_ADDQUEST,
            isSupport: this.state.conversionList[index].isSupport,
            thumbnail:this.state.conversionList[index].thumbnail,
        }
        // console.log("我在打印json")
       // console.log(jsonprops)
        var jsonObj = {
            key: "detialQuestion",
            props: jsonprops
        };
        this.props.push(jsonObj);

    }
    callback_ADDQUEST(coversionList1) {
        //发帖后，更新社区,需要信息吗0 0 ，暂时不需要，我也没想清楚
        //console.log(this);
        // console.log("call_backweiruufh");
        this.setState({ coversionList: this.state.ds.cloneWithRows(coversionList1) });//????


    }
    callback_ADDQUEST1() {

        this.fetchCoversion(serverAddress.USER.nid);



    }

    EntryKey_pressEVENT() {
        //按下回车,搜索开始
        //Alert.alert("搜索")
        this.fetchSearchCoversion(this.state.keyword);
    }
    changeText_EVENT(text) {
        //文本改变
        this.setState({ keyword: text });



    }
    fetchCoversion_then(index) {



    }
    deleteRender(data){
        if(data.nid == serverAddress.USER.nid){
            return (
                <Right>
                    <Button transparent >
                        <Icon  name="md-close-circle" style={{color:"#ee4400"}} />
                    </Button>
                </Right>
            )

        }else{
            return null;
        }

    }
    async fetchCoversion(index) {
        //从服务器获得帖子,放到state里面去 this.state.conversionList
        var url = serverAddress.SERVER_ROOT + serverAddress.GET_COVERSIONLIST + "?" + "nid=" + index;
        try {
            let response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'text/*'
                    },
                });

            let data = await response.json();

            var data = data.coversionList;//从这个字段取东西
            this.setState({ conversionList: data });

        } catch (e) {

            this.setState({ conversionList: jsonData });
        }
    }

    async fetchSearchCoversion(keyword) {
        var url = serverAddress.SERVER_ROOT + serverAddress.SEARCH_COVERSIONLIST + "?" + "keyword=" + keyword + "&" + "nid=" + serverAddress.nid;

        try {
            let response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'text/*'
                    }, 

                });
            let data = await response.json();

            var data = data.coversionList;//从这个字段取东西
           // console.log("coversionList");
           // console.log(data);
            this.setState({ conversionList: data });
            


        } catch (e) {
            //异常
            console.log(e)
            this.setState({ conversionList: jsonData });
        }
    }


    getCardlistFromCoversionList(conversionList) {

        if (conversionList instanceof Array) {
            return conversionList.map(this.mapFunction);
        }


    }
    mapFunction(rowData) {

        var date = rowData.date;
        //console.log(rowData);

        //隐射函数
        return (
            <Card >
                <CardItem header bordered style={{ paddingBottom: 4 }}>
                    <Left>
                        {
                            this.thumbnailRender(rowData)
                        }
                        <Body>
                            <Text>{rowData.titleText}</Text>
                            <Text note>{rowData.nick}</Text>
                        </Body>
                        {
                            this.deleteRender(rowData)
                        }
                    </Left>
                </CardItem>
                {
                    this.imageRender(rowData)
                }
                <CardItem content style={{ paddingBottom: 4 }} onPress={() => { this.toQuestionDetial(rowData.index); }}>
                    <Text>{rowData.contentText}</Text>
                </CardItem>
                <CardItem footer style={{ paddingBottom: 4 }}>
                    <Left>
                        <Button transparent>
                            {
                                this.renderSupportIcons(rowData)
                            }
                            <Text>{rowData.supportNum}</Text>
                        </Button>

                        <Button transparent onPress={() => { this.toQuestionDetial(rowData.index); }}>
                            <Icon active name="chatbubbles" onPress={() => { this.toQuestionDetial(rowData.index); }} />
                            <Text enableEmptySections children>{rowData.commitNums}</Text>
                        </Button>

                    </Left>
                    <Body>
                    </Body>
                    {
                        //    this.imageRender(rowData)
                        this.removeYearsAndSecond(rowData)
                    }

                </CardItem>
            </Card>
        );

    }
    imageRender(rowData) {

        //console.log("图片地址" + serverAddress.SERVER_ROOT + serverAddress.IMAGE_ROOT + rowData.url);
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
    thumbnailRender(rowData){
        if(rowData.thumbnail == "" || rowData.thumbnail == undefined || rowData.thumbnail == null){

            return (<Thumbnail source={require('../resources/user_selected.png')} />);
            
        }else{
            return (<Thumbnail source={{uri:serverAddress.SERVER_ROOT+serverAddress.IMAGE_ROOT_PEOPLE+rowData.thumbnail}} />)
            //显示头像
        }


    }
    removeYearsAndSecond(rowData) {
        //Alert.alert(rowData.date)
        //var newDate = serverAddress.getDateFormat(rowData.date);
        //Alert.alert(newDate);
        var newDate=rowData.date;
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
    renderSupportIcons(rowData) {

        if (rowData.isSupport == "true") {
            return (<Icon style={{ color: "#ee4400" }} name="thumbs-up" onPress={() => { this.supportOrNot(rowData.cid, rowData.isSupport); }} />)
        } else {
            return (<Icon active name="thumbs-up" onPress={() => { this.supportOrNot(rowData.cid, rowData.isSupport); }} />)
        }
    }
    async supportOrNot(cid, isSupportNow) {
        //点赞或取消点赞
        //console.log("isSupportNow:"+isSupportNow)

        var type = (isSupportNow == "true") ? 2 : 1;
        // console.log("isSupportNow:"+isSupportNow+" type:"+type) ;
        var jsonObj = {
            cid: cid,
            nid: serverAddress.nid,
            type: type, //如果是支持的状态，就发送取消，如果不是就发送支持
        };
        // console.log(jsonObj);
        var url = serverAddress.SERVER_ROOT + serverAddress.SUPPORT_COVERSION;
        try {
            let response = await fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cid: cid,
                        nid: serverAddress.nid,
                        type: type, //如果是支持的状态，就发送取消，如果不是就发送支持
                    })
                });
            let data = await response.json();

            // console.log(data);
            this.fetchCoversion(serverAddress.nid);//快速刷新

        } catch (e) {
            //异常
            console.log(e);
            Alert.alert("错误", "点赞失败！");
        }
    }

}


