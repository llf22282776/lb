/**
 * Created by bitholic on 2017/2/15.
 */

import React, {Component, PropTypes} from 'react';
import {NavigationExperimental} from 'react-native';
import HomePageContainer from '../containers/HomePageContainer';

const {CardStack} = NavigationExperimental;

export default class Navigator extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        navigator: PropTypes.objectOf(PropTypes.any)
    };

    constructor(props, context) {
        super(props, context);
        this.renderScene = this.renderScene.bind(this);
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

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        switch (route.key) {
            case 'home':
                return (
                    <HomePageContainer
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
        }
    }
}