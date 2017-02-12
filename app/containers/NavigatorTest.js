/**
 * Created by bitholic on 2017/2/7.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
    NavigationExperimental,
    ScrollView,
    StyleSheet,
    Text,
    PixelRatio,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;


export default class YourApplication extends React.Component {

    // This sets up the initial navigation state.
    constructor(props, context) {
        super(props, context);

        this.state = {
            // This defines the initial navigation state.
            navigationState: {
                index: 0, // starts with first route focused.
                routes: [{key: 'Welcome'}], // starts with only one route.
            },
        };

        this._exit = this._exit.bind(this);
        this._onNavigationChange = this._onNavigationChange.bind(this);
    }

    // User your own navigator (see Step 2).
    render(){
        return (
            <YourNavigator
                navigationState={this.state.navigationState}
                onNavigationChange={this._onNavigationChange}
                onExit={this._exit}
            />
        );
    }

    // This handles the navigation state changes. You're free and responsible
    // to define the API that changes that navigation state. In this exmaple,
    // we'd simply use a `function(type: string)` to update the navigation state.
    _onNavigationChange(type){
        let {navigationState} = this.state;
        switch (type) {
            case 'push':
                // push a new route.
                const route = {key: '' + Date.now()};
                navigationState = NavigationStateUtils.push(navigationState, route);
                break;

            case 'pop':
                navigationState = NavigationStateUtils.pop(navigationState);
                break;
        }

        // NavigationStateUtils gives you back the same `navigationState` if nothing
        // has changed. You could use that to avoid redundant re-rendering.
        if (this.state.navigationState !== navigationState) {
            this.setState({navigationState});
        }
    }

    // Exits the example. `this.props.onExampleExit` is provided
    // by the UI Explorer.
    _exit(){
        this.props.onExampleExit && this.props.onExampleExit();
    }

    // This public method is optional. If exists, the UI explorer will call it
    // the "back button" is pressed. Normally this is the cases for Android only.
    handleBackAction(){
        return this._onNavigationChange('pop');
    }
}

// Step 2:
// Define your own controlled navigator.
//
//      +------------+
//    +-+            |
//  +-+ |            |
//  | | |            |
//  | | |   Active   |
//  | | |   Scene    |
//  | | |            |
//  +-+ |            |
//    +-+            |
//      +------------+
//
class YourNavigator extends React.Component {

    // This sets up the methods (e.g. Pop, Push) for navigation.
    constructor(props, context) {
        super(props, context);

        this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
        this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

        this._renderScene = this._renderScene.bind(this);
    }

    // Now use the `NavigationCardStack` to render the scenes.
    render(){
        return (
            <NavigationCardStack
                onNavigateBack={this._onPopRoute}
                navigationState={this.props.navigationState}
                renderScene={this._renderScene}
                style={styles.navigator}
            />
        );
    }

    // Render a scene for route.
    // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
    // as type `NavigationSceneRendererProps`.
    _renderScene(sceneProps){
        return (
            <YourScene
                route={sceneProps.scene.route}
                onPushRoute={this._onPushRoute}
                onPopRoute={this._onPopRoute}
                onExit={this.props.onExit}
            />
        );
    }
}

// Step 3:
// Define your own scene.
class YourScene extends React.Component {
    render() {
        return (
            <ScrollView>
                <NavigationExampleRow
                    text={'route = ' + this.props.route.key}
                />
                <NavigationExampleRow
                    text="NEXT"
                    onPress={this.props.onPushRoute}
                />
                <NavigationExampleRow
                    text="PRE"
                    onPress={this.props.onPopRoute}
                />
                <NavigationExampleRow
                    text="EXIT"
                    onPress={this.props.onExit}
                />
            </ScrollView>
        );
    }
}

class NavigationExampleRow extends React.Component {
    render() {
        if (this.props.onPress) {
            return (
                <TouchableHighlight
                    style={styles.row}
                    underlayColor="#D0D0D0"
                    onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            );
        }
        return (
            <View style={styles.row}>
                <Text style={styles.rowText}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    row: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    rowText: {
        fontSize: 17,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
    },
});
