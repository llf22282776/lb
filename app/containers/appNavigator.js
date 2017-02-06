/**
 * Created by bitholic on 2017/2/4.
 */
'use strict';

import React, {Component} from 'react';
import {
    NavigationExperimental,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;

//First: Define app navigation state will look like.
//PS: likes redux initial state
function createAppNavigationState() {
    return {
        tabs: {
            index: 0,
            routes: [
                {key: 'home'},
                {key: 'qa'},
            ]
        },
        home: {
            index: 0,
            routes: [
                {key: 'home home'}
            ]
        },
        qa: {
            index: 0,
            routes: [
                {key: 'qa home'}
            ]
        },
    };
}

//second: Define what app navigation state shall be updated.
//PS: likes redux reducer function
function updateAppNavigationState(state, action) {
    let {type} = action;
    if (type === 'BackAction') {
        type = 'pop';
    }
    switch (type) {
        case 'push':
            const route = action.route;
            const {tabs} = state;
            const tabKey = tabs.routes[tabs.index].key;
            const scenes = state[tabKey];
            const nextScenes = NavigationStateUtils.push(scenes, route);
            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes,
                };
            }
            break;
        case 'pop':
            const {tabs} = state;
            const tabKey = tabs.routes[tabs.index].key;
            const scenes = state[tabKey];
            const nextScenes = NavigationStateUtils.pop(scenes);
            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes,
                };
            }
            break;
        case 'selectTab':
            const tabKey = action.tabKey;
            const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey);
            if (tabs !== state.tabs) {
                return {
                    ...state,
                    tabs,
                };
            }
            break;
    }
    return state;
}


//third: Defines a helper function that creates a Higher-Order-Component
//which provide a function 'navigate' through component props. The 'navigate'
//function will be used to invoke navigation changes.
function createAppNavigationContainer(ComponentClass) {
    const key = '_AppNavigationContainerNavigateCall';
    class Container extends Component {
        getChildContext() {
            return {
                [key]: this.context[key] || this.props.navigate,
            };
        }

        render() {
            const navigate = this.context[key] || this.props.navigate;
            return <ComponentClass {...this.props} navigate={navigate}/>
        }
    }
    return Container;
}

//fourth: Define a component for your application that owns the navigation state.
export default class AppNavigation extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = createAppNavigationState();
        this._navigate = this._navigate.bind(this);
    }

    render() {
        return (
            <AppNavigator
                appNavigationState={this.state}
                navigate={this._navigate}
            />
        )
    }

    _navigate(action) {
        const state = updateAppNavigationState(this.state, action);
        if (this.state !== state) {
            this.setState(state);
        }
    }
}

//fifth: Define controlled navigator
const AppNavigator = createAppNavigationContainer(class extends Component {
    constructor(props, context) {
        super(props, context);
        this._back = this._back.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        const {appNavigationState} = this.props;
        const {tabs} = appNavigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const scenes = appNavigationState[tabKey];
        return (
            <View>
                <NavigationCardStack
                    key={'stack_' + tabKey}
                    onNavigateBack={this._back}
                    navigationState={scenes}
                    renderScene={this._renderScene}
                />
                <MainTabs
                    navigationState={tabs}
                />
            </View>
        )
    }

    _back() {
        this.props.navigate({type: 'pop'});
    }

    _renderScene(sceneProps) {
        return (
            <MainScene
                {...sceneProps}
            />
        )
    }
});

//sixth: Define tab
const MainTab = createAppNavigationContainer(class extends Component {
    constructor(props, context) {
        super(props, context);
        this._onPress = this._onPress.bind(this);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <Text>
                    {this.props.route.key}
                </Text>
            </TouchableOpacity>
        );
    }

    _onPress() {
        this.props.navigate({type: 'selectTab', tabKey: this.props.route.key});
    }
});

//seventh: Define tabs
const MainTabs = createAppNavigationContainer(class extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View>
                {this.props.navigationState.routes.map(this._renderTab, this)}
            </View>
        )
    }

    _renderTab(route, index) {
        return (
            <MainTab
                key={route.key}
                route={route}
                selected={this.props.navigationState.index === index}
            />
        )
    }
});

//eighth: Define Scene
const MainScene = createAppNavigationContainer(class extends Component {
    constructor(props, context) {
        super(props, context);
        this._popRoute = this._popRoute.bind(this);
        this._pushRoute = this._pushRoute.bind(this);
    }

    render() {
        return (
            <ScrollView>
                <NavigationExampleRow
                    text="Push Route"
                    onPress={this._pushRoute}
                />
                <NavigationExampleRow
                    text="Pop Route"
                    onPress={this._popRoute}
                />
            </ScrollView>
        );
    }

    _pushRoute(){
        // Just push a route with a new unique key.
        const route = {key: '[' + this.props.scenes.length + ']-' + Date.now()};
        this.props.navigate({type: 'push', route});
    }

    _popRoute() {
        this.props.navigate({type: 'pop'});
    }
});

class NavigationExampleRow extends React.Component {
    render() {
        if (this.props.onPress) {
            return (
                <TouchableHighlight
                    underlayColor="#D0D0D0"
                    onPress={this.props.onPress}>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            );
        }
        return (
            <View>
                <Text>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}
