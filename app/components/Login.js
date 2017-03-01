/**
 * Created by 鳌天 on 2017/2/16.
 */
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';

export default class FormExample extends Component {
	
	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item>
							<Input placeholder="手机号" />
						</Item>
						<Item last>
							<Input placeholder="密码" />
						</Item>
					</Form>
				</Content>
			</Container>
		);
	}
}