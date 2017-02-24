/**
 * Created by bitholic on 2017/2/15.
 */

import React, {Component, PropTypes} from 'react';
import {NavigationExperimental} from 'react-native';
import HomePageContainer from '../containers/HomePageContainer';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import ForgetPasswordPage from '../components/ForgetPasswordPage';

const {CardStack} = NavigationExperimental;

export default class Navigator extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        navigator: PropTypes.objectOf(PropTypes.any)
    };

    constructor(props, context) {
        console.log('constructor');
        super(props, context);
        this.renderScene = this.renderScene.bind(this);
    }

    render() {
        console.log('running');
        return (
            <CardStack
                onNavigateBack={this.props.pop}
                navigationState={this.props.navigator}
                renderScene={this.renderScene}
            />
        )
    }

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        console.log(route);
        switch (route.key) {
            case 'home':
                return (
                    <HomePageContainer
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'login':
                return (
                    <LoginPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'register':
                return (
                    <RegisterPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'forget':
                return (
                    <ForgetPasswordPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
        }
    }
}