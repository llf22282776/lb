/**
 * Created by 鳌天 on 2017/2/25.
 */
import React,{Component} from 'react';
import {TextInput} from 'react-native';
import {
	Container,
	Header,
	Button,
	Content,
	Card,
	CardItem,
	Left,
	ListItem,
	Text,
	Thumbnail,
	Right,
	Icon,
	Picker,
} from 'native-base';

class UserDetailPage extends Component{
	// 构造
	constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {
		    user:"名字",
		    account:"1332165846",
		    sex:'key0',
	    };
	}
	onBack = () =>{
		this.props.pop();
	};

	onValueChange = (value) =>{
		 this.setState({
			 sex:value
		 });
	 };

	changeName = (value) =>{
		this.setState({user:value})
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
					<Card>
						<CardItem>
							<Text>头像</Text>
							<Right>
								<Thumbnail style={{marginRight:20}} size={120} source={require('../resources/1.png')}/>
							</Right>
						</CardItem>
						<ListItem button >
							<Text>昵称</Text>
							<Right>
								<Text> {this.state.user}</Text>
							</Right>
						</ListItem>
						<ListItem>
							<Text>路宝账号</Text>
							<Right>
								<Text>{this.state.account}</Text>
							</Right>
						</ListItem>
						<ListItem>
							<Text>绑定车牌号</Text>
						</ListItem>
					</Card>
					<Card>
						<Picker
							style={{margin:20}}
							mode='dialog'
						    selectedValue={this.state.sex}
						    onValueChange={this.onValueChange}
						>
							<Picker.item label="Man" value="key0"/>
							<Picker.item label="Woman" value="key1"/>
						</Picker>
						<ListItem>
							<Text>修改密码</Text>
						</ListItem>
						<ListItem>
							<Text>绑定邮箱</Text>
						</ListItem>
					</Card>
				</Content>
			</Container>
		)
	}
}
export default UserDetailPage;