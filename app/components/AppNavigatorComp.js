/**
 * Created by bitholic on 2017/2/15.
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    NavigationExperimental,
    View,
    Text,
    Button,
} from 'react-native';

const { CardStack } = NavigationExperimental;

export default class AppNavigatorComp extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        navigation: PropTypes.objectOf(PropTypes.any)
    };

    constructor(props, context) {
        super(props, context);
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(sceneProps) {
        switch (sceneProps.scene.route.key) {
            case 'home':
                return (
                    <View>
                        <Text>HOME</Text>
                        <Button title='push' onPress={() => this.props.push('community')} />
                        <Button title='pop' onPress={() => this.props.pop()} />
                    </View>
                );
            case 'community':
                return (
                    <View>
                        <Text>community</Text>
                        <Button title='push' onPress={() => this.props.push('qa')} />
                        <Button title='pop' onPress={() => this.props.pop()} />
                    </View>
                );
            case 'qa':
                return (
                    <View>
                        <Text>QA</Text>
                        <Button title='push' onPress={() => this.props.push('home')} />
                        <Button title='pop' onPress={() => this.props.pop()} />
                    </View>
                );
        }
    }

    render() {
        return (
            <CardStack
                onNavigateBack={this.props.pop}
                navigationState={this.props.navigation}
                renderScene={this.renderScene}
            />
        )
    }
}