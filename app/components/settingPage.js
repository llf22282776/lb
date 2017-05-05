
/**
 * Created by 鳌天 on 2017/3/23.
 */
import React,{Component} from 'react';

import {
	Container,
	Header,
	Content,
	Button,
	Icon,
	ListItem,
	Text,
	Left
}from 'native-base';

class SettingPage extends Component{
	constructor(props){
		super(props);
	}
	
	onBack = () =>{
		this.props.pop();
	};
	render(){
		return(
			<Container>
				<Header>
					<Left>
						<Button onPress={this.onBack}>
							<Icon name="ios-arrow-back"/>
						</Button>
					</Left>
				</Header>
				<Content>
					<ListItem itemDivider>
						<Text>基本设置</Text>
					</ListItem>
					<ListItem>
						<Text>字体大小</Text>
					</ListItem>
					<ListItem>
						<Text>自动切换主题</Text>
					</ListItem>
					
					<ListItem itemDivider>
						<Text>账号设置</Text>
					</ListItem>
					<ListItem>
						<Text>黑名单</Text>
					</ListItem>
					
					<ListItem itemDivider>
						<Text>关于和帮助</Text>
					</ListItem>
					<ListItem>
						<Text>意见与反馈</Text>
					</ListItem>
					<ListItem>
						<Text>去评价</Text>
					</ListItem>
					<ListItem>
						<Text>检查更新</Text>
					</ListItem>
				</Content>
			</Container>
		)
	}
}

export default SettingPage;

