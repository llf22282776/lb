/**
 * Created by 鳌天 on 2017/2/16.
 */
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Card, Label, CardItem, Button,Text,Right,Left} from 'native-base';
import {Image} from 'react-native';
export default class LoginPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			canLogin: false
		};
		
		this.user = {
			account:'',
			password:''
		};

	};
	
	
	onChangeAccount = (text) => {
		this.user.account = text;
	};

	onChangePassWord = (text) => {
		this.user.password = text;
	};

	onLogin = () => {
		
		//校验账户合法性
		this.setState({canLogin:true});
		// this.props.push({key: 'home'})
	};


	render(){
		return (
			<Container>
				<Content>
					<Card style={{marginTop:'20%'}}>
						<CardItem >
							<Image source={require('../resources/login-background.jpg')}
							       style={{
						                height:150,
						                width:'100%'
							       }}/>
						</CardItem>
						<Form>
							<Item>
								<Label>Username</Label>
								<Input/>
							</Item>
							<Item>
								<Label>PassWord</Label>
								<Input/>
							</Item>
						</Form>
						<CardItem style={{flex:1,flexDirection:'row',}}>
							<Button style={styles.button}>
								<Text>Login</Text>
							</Button>
							<Button style={styles.button}>
								<Text>Register</Text>
							</Button>
							<Button style={styles.button}>
								<Text>Forget</Text>
							</Button>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const styles ={
	button:{
		margin:10
	}
}