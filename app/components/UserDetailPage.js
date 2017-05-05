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
import * as sad from '../util/serverAddress'
 class  UserDetailPage extends Component{
	// 构造
	constructor(props) {
	    super(props);
	    // 初始状态
		this.onBack=this.onBack.bind(this);
		this.onValueChange=this.onValueChange.bind(this);
		this.changeName=this.changeName.bind(this);
		this.renderThumbnail=this.renderThumbnail.bind(this);
	    this.state = {
		    user:sad.USER.nick,
		    phone:sad.USER.phone,
		    sex:sad.USER.sex,
	    };
	}

	onBack () {
		this.props.pop();
	};

	onValueChange  (value) {

		 this.setState({
			 sex:value
		 });
	 };


	changeName (value) {

		this.setState({user:value})
	};
	renderThumbnail() {

        if (sad.USER.thumbnail == null || sad.USER.thumbnail == undefined || sad.USER.thumbnail == "")
            return <Right><Thumbnail style={{ width: 100, height: 100 }} source={require('../resources/1.png')} /></Right>
        else
            return <Right><Thumbnail style={{ width: 100, height: 100 }} source={{ uri: sad.SERVER_ROOT + sad.IMAGE_ROOT_PEOPLE + sad.USER.thumbnail }} /></Right>

    }
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
						{

							this.renderThumbnail()
						}
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
								<Text>{this.state.phone}</Text>
							</Right>
						</ListItem>
					</Card>
					<Card>
						<ListItem>
							<Text>绑定邮箱</Text>
						</ListItem>
						<ListItem>
							<Text>修改密码</Text>

						</ListItem>
					</Card>
				</Content>
			</Container>
		)
	}
}
export default UserDetailPage;