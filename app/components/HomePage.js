/**
 * Created by bitholic on 2017/2/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
    StyleProvider,
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Text,
    Button,
    Body,
    Icon,
} from 'native-base';
import {View} from 'react-native';
import getTheme from '../themes';
import myTheme from '../themes/myThemes/baseTheme';
import SearchPageContainer from '../containers/SearchPageContainer';

const headerText = {
    community: '路宝社区',
    qa: '问答',
    my: '我的'
};

export default class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {selectedTab, tab} = this.props;
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    <Container>
                        <View key='community'
                              style={[styles.sceneContainer, (selectedTab === 'community' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'community' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'community')}>
                            <Header>
                                <Body>
                                <Title>{headerText[selectedTab]}</Title>
                                </Body>
                            </Header>
                            <Content>
                                <Title>TodoList:</Title>
                                <Text>weather</Text>
                            </Content>
                        </View>
                        <View key='qa'
                              style={[styles.sceneContainer, (selectedTab === 'qa' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'qa' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'qa')}>
                            <SearchPageContainer/>
                        </View>
                        <View key='my'
                              style={[styles.sceneContainer, (selectedTab === 'my' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'my' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'my')}>
                            <Header>
                                <Body>
                                <Title>{headerText[selectedTab]}</Title>
                                </Body>
                            </Header>
                            <Content>
                                <Title>MyPage</Title>
                                <Text>mypagecontent</Text>
                            </Content>
                        </View>
                    </Container>
                    <Footer>
                        <FooterTab>
                            <Button active={selectedTab === 'community'} onPress={() => tab('community')}>
                                <Icon name='ios-people-outline'/>
                                <Text>{headerText.community}</Text>
                            </Button>
                            <Button active={selectedTab === 'qa'} onPress={() => tab('qa')}>
                                <Icon name='ios-bulb-outline'/>
                                <Text>{headerText.qa}</Text>
                            </Button>
                            <Button active={selectedTab === 'my'} onPress={() => tab('my')}>
                                <Icon name='ios-person-outline'/>
                                <Text>{headerText.my}</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = {
    hidden: {
        overflow: 'hidden',
        opacity: 0,
    },
    sceneContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
};
