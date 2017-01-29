/**
 * react-native app ios entrance
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MainNavigator from './app/components/MainNavigator';

export default class lb extends Component {
    render() {
        return  (
            <MainNavigator/>
        )
    }
}

AppRegistry.registerComponent('lb', () => lb);
