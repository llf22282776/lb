/**
 * Created by 鳌天 on 2017/2/9.
 */
import { tabReducer } from 'react-native-navigation-redux-helpers';

const tabs = {
	routes: [
		{ key: 'home', title: 'Home' },
		{ key: 'community', title: 'Community' },
		{ key: 'qa', title: 'QA' },
		{ key: 'notifications', title: 'Notifications' },
		{ key: 'my', title: 'My' }
	],
	key: 'ApplicationTabs',
	index: 0
};

module.exports = tabReducer(tabs);