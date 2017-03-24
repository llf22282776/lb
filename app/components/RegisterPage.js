/**
 * Created by 鳌天 on 2017/2/2.
 */
import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

const Item = Picker.Item;

export default class RegisterPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: undefined,
			selected1: 'key0',
			results: {
				items: []
			}
		};
	}
	onValueChange(value) {
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
								<Input placeholder="手机号" />
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
								<Input placeholder="昵称"/>
							</InputGroup>
						</ListItem>
						<ListItem>
							<InputGroup>
								<Input placeholder="邮箱"  />
							</InputGroup>
						</ListItem>
						
					</List>
					<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
						注册
					</Button>
				</Content>
			</Container>
		);
	}
}