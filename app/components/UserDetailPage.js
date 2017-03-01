/**
 * Created by 鳌天 on 2017/2/25.
 */
import React,{Component} from 'react-native';
import {Container, Content, Card, CardItem, Text, Thumbnail, Right, Icon} from 'native-base';

class UserDetailPage extends Component{
	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {
		    options:["修改密码","绑定邮箱"],
		    user:"名字",
		    account:"1332165846",
		    sex:"MAN"
	    };
	  }

	render(){


		return(
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Text>头像</Text>
							<Right>
								<Thumbnail style={{marginRight:20}} size={120} source={require('../resources/1.png')}/>
								<Icon name="arrow-forward"/>
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
						<CardItem>
							<Text>性别</Text>
							{
								() =>{
									if(this.state.sex==="MAN"){
										return <Icon name="ios-man"/>;
									}else{
										return <Icon name="iso-woman"/>
									}
								}
							}
							<Icon name="arrow-forward"/>
						</CardItem>
						{
							()=>{this.state.options.map(
								(item)=>{
									return(
										<CardItem>
											<Text>{item}</Text>
											<Right>
												<Icon name="arrow-forward"/>
											</Right>
										</CardItem>
									)
								}
							)}
						}
					</Card>
				</Content>
			</Container>
		)
	}
}

function mapStateToProps() {
	
}

export default UserDetailPage;