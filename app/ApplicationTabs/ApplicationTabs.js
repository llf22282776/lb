/**
 * Created by 鳌天 on 2017/2/6.
 */
import React ,{ Component } from 'react';

import {
	Container,
	Header,
	FooterTab,
	Content,
	Title,
	Footer,
	Button,
	Icon,
	Badge
}from 'native-base'

import {Text, View} from 'react-native';

import RegisterPage from '../components/RegisterPage';
import UserInfo from '../components/UserPage'
import {connect} from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

const {jumpTo, pushRoute} = navigationActions;

class ApplicationTabs extends Component{
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			title:"主页",
			active:"my"
		};
	}
	
	_renderScene = (type) =>{
		switch (type){
			case 'home':
				return <RegisterPage/>
			case 'community':
				return <Text>Community</Text>;
			case 'QA':
				return <Text>QA</Text>;
			case 'message':
				return <Text>Message</Text>;
			case 'my':
				return <UserInfo/>;
			default:
				return <Text>Home</Text>;
		}
	}

	render(){
		return(
			<Container>
				<Header>
					<Title>首页</Title>
				</Header>
				<Content>
					{this._renderScene(this.state.active)}
				</Content>
				<Footer>
					<FooterTab>
						<Button
							active={this.state.active === 'home'}
							onPress={() => {this.setState({active: 'home'}); }}>
							首页
							<Icon name='ios-home-outline'/>
						</Button>
						<Button
							active={this.state.active === 'community'}
							onPress={() => {this.setState({active: 'community'});}}>
							社区
							<Icon name='ios-people-outline'/>
						</Button>
						<Button
							active={this.state.active === 'QA'}
							onPress={() => {this.setState({active: 'QA'});}}>
							问答
							<Icon name='ios-bulb-outline'/>
						</Button>
						<Button
							active={this.state.active === 'message'}
							onPress={() => {this.setState({active: 'message'});}}>
							<Badge>2</Badge>
							消息
							<Icon name='ios-mail-outline'/>
						</Button>
						<Button
							active={this.state.active === 'my'}
							onPress={() => {this.setState({active: 'my'});}}>
							我
							<Icon name='ios-person-outline'/>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		)
	}
	
	// _renderApp() {
	// 	const selectedTab = this.props.navigation.routes[this.props.navigation.index];
	// 	const actions = [{
	// 		title: 'New Item',
	// 		icon: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
	// 		show: 'always',
	// 		showWithText: false
	// 	}];
	// 	return (
	// 		<View style={{ flex: 1 }}>
	// 			<ToolbarAndroid
	// 				navIcon={require('./img/hamburger.png')}
	// 				actions={actions}
	// 				onIconClicked={() => this.drawer.openDrawer()}
	// 				style={styles.toolbar}
	// 				title={selectedTab.title}
	// 				onActionSelected={this._onActionSelected.bind(this)}
	// 			/>
	// 			{this._renderTabContent(selectedTab)}
	// 		</View>
	// 	);
	// }
	
	// _onActionSelected(position) {
	// 	const { dispatch } = this.props;
	// 	if (position === 0) {
	// 		dispatch(pushRoute({
	// 			key: 'new',
	// 			title: 'Main Screen',
	// 			showBackButton: true
	// 		}, 'global'));
	// 	}
	// }
	
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs')
	};
}
// export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
export default ApplicationTabs;