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
import getTheme from '../native-base-theme';
import myTheme from '../native-base-theme/myThemes/baseTheme';
import SearchHeaderContainer from '../containers/SearchHeaderContainer';
import SearchHeaderComp from '../components/SearchHeaderComp';
import RoadMasterApp from '../containers/roadMasterApp'

export default class AppTabNaviComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    renderHeader(selectedTab) {
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
                    <Header>
                        <Body>
                        <Title>社区</Title>
                        </Body>
                    </Header>
                );
            case 'qa':
                return (
                    <SearchHeaderContainer/>
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

    renderContent(selectedTab) {
        switch (selectedTab) {
            case 'home':
                return (
                    <Content>
                        <RoadMasterApp/>
                    </Content>
                );
            case 'community':
                return (
                    <Content>
                        <Title>社区</Title>
                    </Content>
                );
            case 'qa':
                return (
                    <Content>
                        <Title>问答</Title>
                    </Content>
                );
            case 'message':
                return (
                    <Content>
                        <Title>消息</Title>
                    </Content>
                );
            case 'my':
                return (
                    <Content>
                        <Title>我</Title>
                    </Content>
                )
        }
    }

    render() {
        const {selectedTab, tab} = this.props;
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    {this.renderHeader(selectedTab)}
                    {this.renderContent(selectedTab)}
                    <Footer>
                        <FooterTab>
                            <Button active={selectedTab === 'home'} onPress={() => tab('home')}>
                                <Icon name='ios-home-outline'/>
                                <Text>首页</Text>
                            </Button>
                            <Button active={selectedTab === 'community'} onPress={() => tab('community')}>
                                <Icon name='ios-people-outline'/>
                                <Text>社区</Text>
                            </Button>
                            <Button active={selectedTab === 'qa'} onPress={() => tab('qa')}>
                                <Icon name='ios-bulb-outline'/>
                                <Text>问答</Text>
                            </Button>
                            <Button active={selectedTab === 'message'} badgeValue={1} onPress={() => tab('message')}>
                                <Icon name='ios-mail-outline'/>
                                <Text>消息</Text>
                            </Button>
                            <Button active={selectedTab === 'my'} onPress={() => tab('my')}>
                                <Icon name='ios-person-outline'/>
                                <Text>我</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        )
    }

    /*
     render() {
     const {selectedTab, tab} = this.props;
     return (
     <TabBarIOS>
     <TabBarIOS.Item
     selected={selectedTab === 'home'}
     onPress={() => tab('home')}
     >
     <Text>Home</Text>
     </TabBarIOS.Item>
     <TabBarIOS.Item
     selected={selectedTab === 'community'}
     onPress={() => tab('community')}
     >
     <Text>Community</Text>
     </TabBarIOS.Item>
     <TabBarIOS.Item
     selected={selectedTab === 'qa'}
     onPress={() => tab('qa')}
     >
     <Text>QA</Text>
     </TabBarIOS.Item>
     <TabBarIOS.Item
     selected={selectedTab === 'message'}
     onPress={() => tab('message')}
     >
     <Text>Message</Text>
     </TabBarIOS.Item>
     <TabBarIOS.Item
     selected={selectedTab === 'my'}
     onPress={() => tab('my')}
     >
     <Text>My</Text>
     </TabBarIOS.Item>
     </TabBarIOS>
     );
     }
     */
}
