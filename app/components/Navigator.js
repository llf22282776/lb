/**
 * Created by bitholic on 2017/2/15.
 */

import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import HomePageContainer from '../containers/HomePageContainer';
import LoginPage from './LoginPage';
import RegisterPage from '../components/RegisterPage';
import ForgetPasswordPage from '../components/ForgetPasswordPage';
import AnswerDetailPage from '../components/AnswerDetailPage';
import AddQuestionPage from '../components/AddQuestionPage';
import UserDetailPage from './UserDetailPage';
import UserInfo from './UserPage';
import DetialQuestionPage from '../components/DetialQuestionPage';
import AnswerToQuestionPage from '../components/AnswerToQuestionPage';
import SettingPage from './settingPage';
import NewMsgListPage from './NewMsgListPage';
import WelcomePage from './WelcomePage';
import ComplexDetailPage from './ComplexDetailPage';
import CarDetailPage from './CarDetailPage';
import CarBindPage from './CarBindPage';
import CarListPage from './CarListPage';
const { CardStack } = NavigationExperimental;
var i = 0;
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
                navigationState={this.props.navigator}
                renderScene={this.renderScene}

            />
        )
    }

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        if (i == 0) {
            route.key = 'WelcomePage';
            i++;

        }
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
                );
            case 'answerDetail':
                return (
                    <AnswerDetailPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'addQuestion':
                return (
                    <AddQuestionPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'userInfo':
                return (
                    <UserInfo
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'detialQuestion': {
                return (
                    <DetialQuestionPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />);
            }
            case 'userDetail':
                return (
                    <UserDetailPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'answerToQuestion':
                return (
                    <AnswerToQuestionPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />);
            case 'setting':
                return (
                    <SettingPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
            case 'newMsgListPage':
                return (
                    <NewMsgListPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
            case 'WelcomePage':
                return (
                    <WelcomePage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
            case 'complexDetailPage':
                return (
                    <ComplexDetailPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
            case 'carDetailPage':
                return (
                    <CarDetailPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
            case 'carBindPage':
                return (
                    <CarBindPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
            case 'carListPage':
                return (
                    <CarListPage
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                )
        }

    }
}

