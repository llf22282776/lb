/**
 * Created by bitholic on 2017/2/9.
 */

'use strict';

import {NavigationExperimental} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
import {View, Text, Button} from 'react-native';

const {
    popRoute,
    pushRoute,
} = actions;

const {
    CardStack: NavigationCardStack
} = NavigationExperimental;

class AppNavigator extends Component {
    render() {
        return (
            <NavigationCardStack
                navigationState={this.props.navigation}
                renderScene={this._renderScene}
            />
        );
    }

    _renderScene(props) {
        switch (props.scene.route.key) {
            case 'scene1':
                return (
                    <View>
                        <Text>Scene1</Text>
                        <Button title="push" onPress={this.onGoSomewhere()}/>
                        <Button title="pop" onPress={this.onGoBack()}/>
                    </View>
                );
            default :
                return (
                    <View>
                        <Text>Scene2</Text>
                        <Button title="push" onPress={this.onGoSomewhere()}/>
                        <Button title="pop" onPress={this.onGoBack()}/>
                    </View>
                );
        }
    }

    onGoBack() {
        const {dispatch, navigation} = this.props;
        dispatch(popRoute(navigation.key));
    }

    onGoSomewhere() {
        const {dispatch, navigation} = this.props;
        dispatch(pushRoute({key: 'somewhere else'}, navigation.key));
    }
}

function bindAction(dispatch) {
    return {
        dispatch
    };
}

function mapStateToProps(state) {
    return {
        // XX: assuming you've registered the reducer above under the name 'cardNavigation'
        navigation: state.cardNavigation
    };
}

// export default connect(
//     (state) => ({
//         navigation: state.cardNavigation
//     }),
//     (dispatch) => {
//         return {dispatch}
//     }
// )(GlobalNavigation);

export default connect(mapStateToProps, bindAction)(AppNavigator);