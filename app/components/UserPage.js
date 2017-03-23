import React, { Component } from 'react';
import {Button, Body, Container, Thumbnail, Text ,Content,Right,Left,Footer,Card,Icon,CardItem} from 'native-base';
import {View} from 'react-native';
export default class UserInfo extends Component {
    constructor(props) {
	    super(props);
		this.state = {
			topicShow:false,
			username:"luoop",
			account:"130666",
		};

	    this.styles = {
	        rowButton:{
	            height:100,
		        flex:1
	        }
	    }
    }

	topicClick = () =>{
		this.setState({topicShow:!this.state.topicShow});
		console.log(this.state.topicShow);
	}

	render() {
		return (
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Card>
								<CardItem >
									<Thumbnail style={{marginRight:20}} size={120} source={require('../resources/1.png')}/>
									<Card>
										<CardItem button>
											<Text>{this.state.username}</Text>
											<Right>
												<Icon name="ios-arrow-forward" style={{marginRight:0}}/>
											</Right>
										</CardItem>
										<CardItem disable>
											<Text>路宝账户：{this.state.account}</Text>
										</CardItem>
									</Card>
								</CardItem>
							</Card>
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
						<CardItem button>
							<Icon  name="ios-settings"/>
							<Text>设置</Text>
							<Right>
								<Icon name="ios-arrow-forward"/>
							</Right>
						</CardItem>
						<CardItem button>
							<Icon name="ios-notifications"/>
							<Text>通知</Text>
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