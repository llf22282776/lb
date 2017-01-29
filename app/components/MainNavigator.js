/**
 * Created by bitholic on 2017/1/29.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Navigator,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class MainNavigator extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: '首页',
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '首页'}
                    title='首页'
                    renderIcon={() => <Image style={style.size} source={require('../resources/home.png')}/>}
                    renderSelectedIcon={() => <Image style={style.size} source={require('../resources/home_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '首页'})}>
                    <Text>首页</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '社区'}
                    title='社区'
                    renderIcon={() => <Image style={style.size} source={require('../resources/community.png')}/>}
                    renderSelectedIcon={() => <Image style={style.size} source={require('../resources/community_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '社区'})}>
                    <Text>社区</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '问答'}
                    title='问答'
                    renderIcon={() => <Image style={style.size} source={require('../resources/qa.png')}/>}
                    renderSelectedIcon={() => <Image style={style.size} source={require('../resources/qa_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '问答'})}>
                    <Text>问答</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '通知'}
                    title='通知'
                    renderIcon={() => <Image style={style.size} source={require('../resources/notification.png')}/>}
                    renderSelectedIcon={() => <Image style={style.size} source={require('../resources/notification_selected.png')}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: '通知'})}>
                    <Text>通知</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '我'}
                    title='我'
                    renderIcon={() => <Image style={style.size} source={require('../resources/user.png')}/>}
                    renderSelectedIcon={() => <Image style={style.size} source={require('../resources/user_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '我'})}>
                    <Text>我</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const style = StyleSheet.create({
    size: {
        width: 30,
        height: 30
    }
});

