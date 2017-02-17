/**
 * Created by bitholic on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Badge,
    InputGroup,
    Input,
} from 'native-base';
import baseTheme from '../themes/baseTheme';
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
                        <Title>首页</Title>
                    </Header>
                );
            case 'community':
                return (
                    <Header>
                        <Title>社区</Title>
                    </Header>
                );
            case 'qa':
                return (
                    <Header searchBar rounded>
                        <InputGroup>
                            <Icon name="ios-search"/>
                            <Input rounded
                                   placeholder="请输入您的问题"
                            />
                        </InputGroup>
                        <Button
                            transparent
                            textStyle={{fontSize: 15}}
                        >
                            确认
                        </Button>
                    </Header>
                );
            case 'message':
                return (
                    <Header>
                        <Title>消息</Title>
                    </Header>
                );
            case 'my':
                return (
                    <Header>
                        <Title>我</Title>
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
            <Container theme={baseTheme}>
                {this.renderHeader(selectedTab)}
                {this.renderContent(selectedTab)}
                <Footer>
                    <FooterTab>
                        <Button
                            active={selectedTab === 'home'}
                            onPress={() => tab('home')}>
                            首页
                            <Icon name='ios-home-outline'/>
                        </Button>
                        <Button
                            active={selectedTab === 'community'}
                            onPress={() => tab('community')}>
                            社区
                            <Icon name='ios-people-outline'/>
                        </Button>
                        <Button
                            active={selectedTab === 'qa'}
                            onPress={() => tab('qa')}>
                            问答
                            <Icon name='ios-bulb-outline'/>
                        </Button>
                        <Button
                            active={selectedTab === 'message'}
                            onPress={() => tab('message')}>
                            <Badge>2</Badge>
                            消息
                            <Icon name='ios-mail-outline'/>
                        </Button>
                        <Button
                            active={selectedTab === 'my'}
                            onPress={() => tab('my')}>
                            我
                            <Icon name='ios-person-outline'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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
