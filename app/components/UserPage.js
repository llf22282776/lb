import React, { Component } from 'react';
import {Button, Body, Container, Thumbnail, Text ,Content,Right,Left,Footer,Card,Icon,CardItem} from 'native-base';
import {View} from 'react-native';
export default class UserInfo extends Component {
    constructor(props) {
	    super(props);
		this.state = {
			topicShow:false,
			username:"luoop\n",
			account:"130666"
		};
	    this.key = this.props.key;
	    
	    this.styles = {
		    rowButton: {
			    height: 100,
			    flex: 1
		    },
		    header: {
			    flex: 1,
			    flexDirection: 'column'
		    }

	    };
    }
	
	topicClick = () =>{
		this.setState({topicShow:!this.state.topicShow});
		console.log(this.state.topicShow);
	};
	
	render() {
		return (
			<Container >
				<Content >
					<Card>
						<CardItem button onPress={()=>{this.props.changeKey('detail')}}>
							<Thumbnail style={{marginRight:10}} size={120} source={require('../resources/1.png')}/>
							<CardItem style={this.styles.header}>
								<Text>{this.state.username}</Text>
								<Text>路宝账户：{this.state.account}</Text>
							</CardItem>
						</CardItem>
						<CardItem itemDvider/>
						<CardItem button>
							<Icon name="ios-car"/>
							<Text>绑定车辆</Text>
							<Right>
								<Icon name="ios-arrow-forward" />
							</Right>
						</CardItem>
						<CardItem itemDvider/>

						<CardItem button onPress={this.topicClick}>
							<Icon name="ios-eye"/>
							<Text>关注话题</Text>
							<Right>
								<Icon name={this.state.topicShow?'ios-arrow-up':'ios-arrow-down'}/>
							</Right>
						</CardItem>
						{(()=>{
							if(this.state.topicShow){
								console.log(this.state.topicShow);
								return(
									<Content>
										<Left>
										<CardItem button>
											<Left>
												<Text>#吐槽#</Text>
											</Left>
										</CardItem>
										<CardItem button>
											<Left>
												<Text>#汽车保养#</Text>
											</Left>
										</CardItem>
										<CardItem button>
											<Left>
												<Text>#追责#</Text>
											</Left>
										</CardItem>
										</Left>
									</Content>
								)
							}
						})()}
						<CardItem button onPress={()=>{this.props.changeKey('setting')}}>
							<Icon  name="ios-settings"/>
							<Text>设置</Text>
							<Right>
								<Icon name="ios-arrow-forward"/>
							</Right>
						</CardItem>
						<CardItem button>
							<Icon name="ios-notifications"/>
							<Text>消息</Text>
							<Right>
								<Icon name="ios-arrow-forward"/>
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

