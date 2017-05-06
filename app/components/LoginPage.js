/**
 * Created by 鳌天 on 2017/2/16.
 */
import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Card, Button, Text, Label, CardItem} from 'native-base';
import {View, Image, TouchableOpacity} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import * as sad from '../util/serverAddress'
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
    };


    onChangeAccount = (text) => {
        this.setState({account: text});
    };

    onChangePassWord = (text) => {
        this.setState({password: text})
    };

    onLogin = () => {
        //校验账户合法性
        this.setState({canLogin: true});
        sad.USER.nid=parseInt(account,10);
        this.props.push({key: 'home'})
    };

    onRegister = () => {
        this.props.push({key: 'register'})
    };

    onForget = () => {
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
                        <Item floatingLabel>
                            <Label>账号/手机号</Label>
                            <Input onChangeText={this.onChangeAccount}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>密码</Label>
                            <Input secureTextEntry onChangeText={this.onChangePassWord}/>
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