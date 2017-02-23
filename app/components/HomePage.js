/**
 * Created by bitholic on 2017/2/16.
 */
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
import getTheme from '../themes';
import myTheme from '../themes/myThemes/baseTheme';
import SearchPageContainer from '../containers/SearchPageContainer';

const headerText = {
    community: '社区',
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
                                <Title style={styles.headerText}>{headerText[selectedTab]}</Title>
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
                                <Title style={styles.headerText}>{headerText[selectedTab]}</Title>
                                </Body>
                                <Content>
                                    <Title>MyPage</Title>
                                    <Text>mypagecontent</Text>
                                </Content>
                            </Header>
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

    renderPage(selectedTab) {
        switch (selectedTab) {
            case 'home':
                return (
                    <Header>
                        <Body>
                        <Title>首页</Title>
                        </Body>
                    </Header>
                );
            case 'community':
                return (
                    <Container>
                        <Header>
                            <Body>
                            <Title>社区</Title>
                            </Body>
                        </Header>
                        <Content>
                            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source. Lorem
                                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                                Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                                theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                                are also reproduced in their exact original form, accompanied by English versions from
                                the 1914 translation by H. Rackham.</Text>
                        </Content>
                    </Container>
                );
            case 'qa':
                return (
                    <SearchPageContainer />
                );
            case 'message':
                return (
                    <Header>
                        <Body>
                        <Title>消息</Title>
                        </Body>
                    </Header>
                );
            case 'my':
                return (
                    <Header>
                        <Body>
                        <Title>我</Title>
                        </Body>
                    </Header>
                )
        }
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
    headerText: {
        color: '#fff',
    }
};
