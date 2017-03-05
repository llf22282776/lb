import React, { Component } from 'react';
import {Button, Container, Thumbnail, Text ,Content,Right,Footer,Card,Icon,CardItem} from 'native-base';

export default class UserInfo extends Component {
    constructor(props) {
	    super(props);
		this.state = {
			topicShow:false,
			username:"luoop",
			account:"130666"
		}

	    this.styles = {
	        rowButton:{
	            height:100,
		        flex:1
	        }
	    }
    }

	topicClick = () =>{
		this.setState({topicShow:!this.state.topicShow});
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
										<CardItem button >
											<Text>{this.state.username}</Text>
											<Right>
												<Icon name="ios-arrow-forward" style={{marginRight:0}}/>
											</Right>
										</CardItem>
										<CardItem button>
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
							<Icon name="ios-arrow-forward" />
						</CardItem>
						<CardItem itemDvider/>
						{()=>{
							if(this.state.topicShow){
								return(
									<CardItem button onClik={this.topicClick}>
										<Icon name="ios-eye"/>
										<Text>关注话题</Text>
										<Icon name="ios-arrow-down"/>
									</CardItem>
								)
							}
							else{
								return(
									<Content>
										<CardItem button>
											<Text>#吐槽#</Text>
										</CardItem>
										<CardItem button>
											<Text>#汽车保养#</Text>
										</CardItem>
										<CardItem button>
											<Text>#追责#</Text>
										</CardItem>
									</Content>
								)
							}
						}}
						<CardItem button>
							<Icon name="ios-settings"/>
							<Text>设置</Text>
							<Icon name="ios-arrow-forward"/>
						</CardItem>
						<CardItem button>
							<Icon name="ios-notifications"/>
							<Text>通知</Text>
							<Icon name="ios-arrow-forward"/>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}