/**
 * Created by bitholic on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    TabBarIOS,
    View,
    Text,
    Alert,
    Vibration,
} from 'react-native';

export default class AppTabNaviComp extends Component {
    //static propTypes = {};
    render() {
        const {selectedTab, tab} = this.props;
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    selected={selectedTab === 'home'}
                    onPress={() => tab('home')}
                >
                    <Text>Home</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={selectedTab === 'community'}
                    onPress={() => tab('community')}
                >
                    <Text>Community</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={selectedTab === 'qa'}
                    onPress={() => tab('qa')}
                >
                    <Text>QA</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={selectedTab === 'message'}
                    onPress={() => tab('message')}
                >
                    <Text>Message</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={selectedTab === 'my'}
                    onPress={() => tab('my')}
                >
                    <Text>My</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
