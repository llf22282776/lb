/**
 * Created by 鳌天 on 2017/3/23.
 */
import React,{Component} from 'react';
import {View} from 'react-native';
import {Container} from 'native-base';

import UserPage from './UserPage';
import UserDetailPage from './UserDetailPage';
import SettingPage from './settingPage';

class My extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			key:'user'
		}
	}
	
	renderScene = () => {
		switch (this.state.key){
			case 'user':
				return <UserPage changeKey={this.changeKey}/>;
			case 'detail':
				return <UserDetailPage changeKey={this.changeKey} />
			case 'setting':
				return <SettingPage changeKey={this.changeKey}/>
		}
	};
	
	changeKey = (key) =>{
		this.setState({key:key});
	};
	
	render(){
		
		return(
			<Container>
				{this.renderScene()}
			</Container>
		)
	}
}

const styles ={
	hidden: {
		overflow: 'hidden',
		opacity: 0
	},
	sceneContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
};

export default My;