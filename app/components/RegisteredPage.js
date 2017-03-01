/**
 * Created by 鳌天 on 2017/2/2.
 */
import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

const Item = Picker.Item;

export default class FormExample extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: undefined,
			selected1: 'key0',
			results: {
				items: [],
			},
		};
	}
	onValueChange(value: string) {
		this.setState({
			selected1: value,
		});
	}
	render() {
		return (
			<Container>
				<Content>
					<List>
						<ListItem>
							<InputGroup>
								<Input placeholder="用户名" />
							</InputGroup>
						</ListItem>

						<ListItem>
							<InputGroup>
								<Input placeholder="邮箱" />
							</InputGroup>
						</ListItem>
						<ListItem>
							<InputGroup>
								<Input placeholder="密码" secureTextEntry />
							</InputGroup>
						</ListItem>
						<ListItem>
							<InputGroup>
								<Input placeholder="确认密码" secureTextEntry />
							</InputGroup>
						</ListItem>
						<ListItem>
							<InputGroup>
								<Input placeholder="电话" keyboardType="numeric" />
							</InputGroup>
						</ListItem>

						<ListItem iconLeft>
							<Text>GENDER</Text>
							<Picker
								iosHeader="Select one"
								mode="dropdown"
								selectedValue={this.state.selected1}
								onValueChange={this.onValueChange.bind(this)} >
								<Item label="Male" value="key0" />
								<Item label="Female" value="key1" />
								<Item label="Other" value="key2" />
							</Picker>
						</ListItem>


					</List>
					<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
						Sign Up
					</Button>
				</Content>
			</Container>
		);
	}
}