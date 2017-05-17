/**
 * Created by 鳌天 on 2017/2/16.
 */
import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Card, Button, Text, Label, CardItem} from 'native-base';
import {View, Image, TouchableOpacity,Alert,TextInput} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import * as contant from '../util/serverAddress'
export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canLogin: false,
            account: '',
            password: ''
        };

        this.styles = {
            img: {
                width: "80%",
                height: 200
            }
        }

        this.onChangeAccount=this.onChangeAccount.bind(this);
        this.onChangePassWord=this.onChangePassWord.bind(this);
        this.onLogin=this.onLogin.bind(this);
        this.onRegister=this.onRegister.bind(this);
        this.onForget=this.onForget.bind(this);
    };


    onChangeAccount  (text)  {
        this.setState({account: text});
    };

    onChangePassWord  (text)  {
        this.setState({password: text})
    };

    async onLogin () {
        //校验账户合法性
        url = contant.SERVER_ROOT + contant.LOG_IN_COMMUNITY+ "?" + "passPort=" + this.state.account + "&pwd=" + this.state.password;

        var response1;
        try {
            response1 = await fetch(
                url, {
                    method: "GET"
                });

            ud = await response1.json();
            if (ud.isLogined == "false") {
                Alert.alert("错误", "登陆失败\n");
                return;
            }

            contant.USER.nid = ud.nid
            contant.USER.nick = ud.nick
            contant.USER.passPort = ud.passPort
            contant.USER.phone = ud.phone
            contant.USER.thumbnail = ud.thumbnail
            contant.USER.newMsgNums = 0
            await contant.msgGetter();//等待获取新通知


        } catch (e) {
            console.warn(e)
            contant.USER.nid = 1
            contant.USER.sex = "男"
            contant.USER.nick = "zhangweiqi"
            contant.USER.passPort = "123"
            contant.USER.pwd = "123"
            contant.USER.phone = "17888821289"
            contant.USER.thumbnail = "1.png"
            contant.USER.newMsgNums = 0 //不是这里拉取的信息
            contant.USER.age = 16;
            contant.USER.rank = 1880;
            contant.USER.restMoney = 660;
            Alert.alert("错误", "网络异常,登陆失败\n");
        }







        this.setState({canLogin: true});
       // sad.USER.nid=parseInt(this.state.account,10);
        this.props.push({key: 'home'})
    };

    onRegister ()  {
        this.props.push({key: 'register'})
    };

    onForget  () {
        this.props.push({key: 'forget'})
    };

    render() {
        return (
            <Container>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require("../resources/login.png")}/>
                </View>
                <View>
                    <Form style={{paddingBottom: 20, paddingRight: 10}}>
                        <Item >
                           
                            <TextInput style={{flex:1}} placeholder="账号/手机号" onChangeText={this.onChangeAccount} />
                        </Item>
                        <Item >
                            
                            <TextInput style={{flex:1}} placeholder="密码" secureTextEntry onChangeText={this.onChangePassWord}/>
                        </Item>
                    </Form>
                    <Button info block onPress={this.onLogin}>
                        <Text>登录</Text>
                    </Button>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 15
                    }}>
                        <TouchableOpacity onPress={this.onForget}>
                            <Text style={{color: '#525252'}}>忘记密码？</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onRegister}>
                            <Text style={{color: '#525252'}}>新用户，注册</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </Container>
        );
    }
}