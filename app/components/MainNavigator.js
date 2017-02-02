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

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

import TabNavigator from 'react-native-tab-navigator';

export default class MainNavigator extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: '社区',
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '首页'}
                    title='首页'
                    renderIcon={() => <Image style={styles.size} source={require('../resources/home.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.size} source={require('../resources/home_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '首页'})}>
                    <Text>home</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '社区'}
                    title='社区'
                    renderIcon={() => <Image style={styles.size} source={require('../resources/community.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.size} source={require('../resources/community_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '社区'})}>
                    <Navigator
                        initialRoute={{title: 'question', index: 0}}
                        renderScene={(route, navigator) =>
                            <Text>hello {route.title}</Text>
                        }
                        navigationBar={
                            <Navigator.NavigationBar
                                routeMapper={{
                                    LeftButton: (route, navigator, index, navState) => {
                                        return (
                                            <View style={{paddingTop: 15}}>
                                                <Icon name='ios-arrow-back' />
                                            </View>
                                        )
                                    },
                                    RightButton: (route, navigator, index, navState) => {
                                        return (
                                            <View style={{paddingTop: 15}}>
                                                <Text style={styles.plainText}>Done</Text>
                                            </View>
                                        )
                                    },
                                    Title: (route, navigator, index, navState) => {
                                        return (
                                            <View style={{paddingTop: 13}}>
                                                <Text style={styles.titleText}>路宝社区</Text>
                                            </View>
                                        )
                                    },
                                }}
                                style={styles.bkColor}
                            />
                        }
                    />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '问答'}
                    title='问答'
                    renderIcon={() => <Image style={styles.size} source={require('../resources/qa.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.size} source={require('../resources/qa_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '问答'})}>
                    <Text>问答</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '通知'}
                    title='通知'
                    renderIcon={() => <Image style={styles.size} source={require('../resources/notification.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.size} source={require('../resources/notification_selected.png')}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: '通知'})}>
                    <Text>通知</Text>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === '我'}
                    title='我'
                    renderIcon={() => <Image style={styles.size} source={require('../resources/user.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.size} source={require('../resources/user_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: '我'})}>
                    <Text>我</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    size: {
        width: 30,
        height: 30
    },

    plainText: {
        color: 'white',
    },

    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    bkColor: {
        backgroundColor: '#007FFF'
    },
});

