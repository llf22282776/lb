/**
 * Created by 鳌天 on 2017/2/2.
 */
import React, { Component } from 'react';
import {TextInput} from 'react-native';
import { Container, Content, Item, Form,Label, Input, Icon, Text, Picker, Button } from 'native-base';


export default class RegisterPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			password:"",
			confirm:"",
			confirmUnderLineColor:"",
			selectedItem: undefined,
			selected1: 'key0',
			results: {
				items: []
			}
		};
	}

	firstInputPassWord = (value) =>{
		this.setState({password:value,confirmUnderLineColor:"red"})
		alert(this.state.password)
	};

	confirmPassWord = (value) =>{
		if(this.state.password===value){
			this.setState({confirmUnderLineColor:""})
		}else{
			this.setState({confirmUnderLineColor:"red"})
		}
	};

	render() {

		return (
			<Container>
				<Content style={{padding:20}}>
					<Form>
						<Item floatingLabel>
							<Label>username</Label>
							<Input />
						</Item >
						<Item floatingLabel>
							<Label>telephone</Label>
							<Input />
						</Item>
						<Item floatingLabel last>
							<Label>password</Label>
							<Input secureTextEntry={true}/>
						</Item>
						<Item floatingLabel>
							<Label>confirm password</Label>
							<Input secureTextEntry={true}/>
						</Item>
						<Item floatingLabel>
							<Label>nickname</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>email</Label>
							<Input />
						</Item>
					</Form>
					<Button onPress={()=>{this.props.push({key:"home"})}} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
						<Text>sign up</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}