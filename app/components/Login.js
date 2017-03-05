/**
 * Created by 鳌天 on 2017/2/16.
 */
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Card, Label, Image, CardItem} from 'native-base';

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
		
		
		this.styles = {
			img: {
				width: "80%",
				height: 200
			}
		}
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
		this.props.push({key: 'home'})
	};

	onRegister = () => {
		this.props.push({key:'register'})
	};

	onForget = () => {
		this.props.push({key:'forget'})
	};

	render(){
		return (
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Image style={this.styles.img}/>
						</CardItem>
						<Form>
							<Item floatingLabel>
								<Label>Username</Label>
								<Input onChangeText={this.onChangeAccount}/>
							</Item>
							<Item floatingLabel last>
								<Label>Password</Label>
								<Input onChangeText={this.onChangePassWord}/>
							</Item>
						</Form>
						<Button light onPress={this.onLogin}>
							<Text>登录</Text>
						</Button>
						<Button light onPress={this.onRegister()}>
							<Text>注册</Text>
						</Button>
						<Button light onPress={this.onForget()}>
							<Text>忘记密码</Text>
						</Button>
					</Card>
				</Content>
			</Container>
		);
	}
}