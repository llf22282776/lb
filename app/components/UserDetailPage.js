/**
 * Created by 鳌天 on 2017/2/25.
 */
import React,{Component} from 'react';
import {
	Header,
	Container,
	Content,
	Card,
	CardItem,
	Text,
	Thumbnail,
	Right,
	Button,
	Left,
	Icon
}from 'native-base';

class UserDetailPage extends Component{
	// 构造
	constructor(props) {
		super(props);
	    // 初始状态
	    this.state = {
		    user:"luoop",
		    account:"1332165846",
		    sex:"MAN"
	    };
	}
	changeSex = () => {
		changedSex = (this.state.sex === "MAN")?"WOMAN":"MAN";
		this.setState({sex:changedSex});
		// alert(this.state.sex);
	};
	back = () => {
		this.props.changeKey('user');
	};
	render(){

		return(
			<Container>
				<Header>
					<Left>
						<Button onPress={this.back}>
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
						<CardItem>
							<Text>昵称</Text>
							<Right>
								<Text>{this.state.user}</Text>
							</Right>
						</CardItem>
						<CardItem>
							<Text>路宝账号</Text>
							<Right>
								<Text>{this.state.account}</Text>
							</Right>
						</CardItem>
					</Card>

					<Card>
						<CardItem button onPress={this.changeSex}>
							<Text>性别</Text>
							<Right>
								{(()=>{
									if(this.state.sex == 'MAN'){
										return <Icon name="ios-man-outline"/>
									}else{
										return <Icon name='ios-woman-outline'/>
									}
								})()}
							</Right>
						</CardItem>
						<CardItem>
							<Text>修改密码</Text>
							<Right>
								<Icon name="ios-arrow-forward"/>
							</Right>
						</CardItem>
						<CardItem>
							<Text>绑定邮箱</Text>
							<Right>
								<Icon name="ios-arrow-forward"/>
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		)
	}
}

function mapStateToProps() {
	
}

export default UserDetailPage;