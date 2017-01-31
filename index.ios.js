/**
 * react-native app ios entrance
 */

'use strict';

import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigationExperimental,
    /*
    View,
    ScrollView,
    Text,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity,
    */
} from 'react-native';

import {Container, Header, Title, Content, Footer, FooterTab, Button, Text, Icon, Badge} from 'native-base';
import {createStore} from 'redux';

import baseTheme from './app/themes/baseTheme';
import MainNavigator from './app/components/MainNavigator';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;


class NavigationExampleRow extends React.Component {
    render() {
        if (this.props.onPress) {
            return (
                <TouchableHighlight
                    style={styles.row}
                    underlayColor="#D0D0D0"
                    onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            );
        }
        return (
            <View style={styles.row}>
                <Text style={styles.rowText}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

export class lb extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            active: 'home',
            footerTabs: {
                index: 0,
                routes: [
                    {key: 'home'},
                    {key: 'community'},
                    {key: 'qa'},
                    {key: 'message'},
                    {key: 'my'},
                ]
            },
        };
    }

    _renderScene(type){
        //let {type} = routes.footerTabs.routes;
        switch(type.footerTabs.routes.key){
            case 'home':
                return <Text>Home</Text>;
            case 'community':
                return <Text>Community</Text>
            case 'qa':
                return <Text>QA</Text>
            case 'message':
                return <Text>Message</Text>
            case 'my':
                return <Text>My</Text>
            default:
                return <Text>Home</Text>
        }
    }

    render() {
        return (
            <Container theme={baseTheme}>
                <Header>
                    <Title>首页</Title>
                </Header>
                <Content>
                    <NavigationCardStack navigationState={this.props.navigationState} renderScene={this._renderScene} />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            active={this.state.active === 'home'}
                            onPress={() => {
                                this.setState({active: 'home',});
                            }}>
                            首页
                            <Icon name='ios-home-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'community'}
                            onPress={() => {
                                this.setState({active: 'community',});
                            }}>
                            社区
                            <Icon name='ios-people-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'QA'}
                            onPress={() => {
                                this.setState({active: 'QA',});
                            }}>
                            问答
                            <Icon name='ios-bulb-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'message'}
                            onPress={() => {
                                this.setState({active: 'message',});
                            }}>
                            <Badge>2</Badge>
                            消息
                            <Icon name='ios-mail-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'my'}
                            onPress={() => {
                                this.setState({active: 'my',});
                            }}>
                            我
                            <Icon name='ios-person-outline'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}



/*
function createAppNavigationState() {
    return  {
        // Three tabs.
        tabs: {
            index: 0,
            routes: [
                {key: 'apple'},
                {key: 'banana'},
                {key: 'orange'},
            ],
        },
        // Scenes for the `apple` tab.
        apple: {
            index: 0,
            routes: [{key: 'Apple Home'}],
        },
        // Scenes for the `banana` tab.
        banana: {
            index: 0,
            routes: [{key: 'Banana Home'}],
        },
        // Scenes for the `orange` tab.
        orange: {
            index: 0,
            routes: [{key: 'Orange Home'}],
        },
    };
}

function updateAppNavigationState(state, action){
    let {type} = action;
    if (type === 'BackAction') {
        type = 'pop';
    }

    switch (type) {
        case 'push': {
            // Push a route into the scenes stack.
            const route = action.route;
            const {tabs} = state;
            const tabKey = tabs.routes[tabs.index].key;
            const scenes = state[tabKey];
            const nextScenes = NavigationStateUtils.push(scenes, route);
            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes,
                };
            }
            break;
        }

        case 'pop': {
            // Pops a route from the scenes stack.
            const {tabs} = state;
            const tabKey = tabs.routes[tabs.index].key;
            const scenes = state[tabKey];
            const nextScenes = NavigationStateUtils.pop(scenes);
            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes,
                };
            }
            break;
        }

        case 'selectTab': {
            // Switches the tab.
            const tabKey = action.tabKey;
            const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey);
            if (tabs !== state.tabs) {
                return {
                    ...state,
                    tabs,
                };
            }
        }
    }
    return state;
}

function createAppNavigationContainer(ComponentClass){
    const key = '_yourAppNavigationContainerNavigateCall';

        class Container extends Component {
            static contextTypes = {
                [key]: PropTypes.func,
            };

            static childContextTypes = {
                [key]: PropTypes.func.isRequired,
            };

            static propTypes = {
                navigate: PropTypes.func,
            };

            getChildContext() {
                return {
                    [key]: this.context[key] || this.props.navigate,
                };
            }

            render() {
                const navigate = this.context[key] || this.props.navigate;
                return <ComponentClass {...this.props} navigate={navigate} />;
            }
        }

        return Container;
}

export default class lb extends Component {
    static propTypes = {
        onExampleExit: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        // This sets up the initial navigation state.
        this.state = createAppNavigationState();
        this._navigate = this._navigate.bind(this);
    }

    handleBackAction() {
        return this._navigate({type: 'pop'});
    }

    _navigate(action){
        if(action.type === 'exit'){
            this.props.onExampleExit && this.props.onExampleExit();
            return;
        }
        const state = updateAppNavigationState(
            this.state,
            action,
        );

        if (this.state !== state) {
            this.setState(state);
        }
    }

    render(){
        // User your own navigator (see next step).
        return (
            <YourNavigator
                appNavigationState={this.state}
                navigate={this._navigate}
            />
        );
    }
}

const YourNavigator = createAppNavigationContainer(class extends Component{
    static propTypes = {
        appNavigationState: PropTypes.shape({
            apple: NavigationPropTypes.navigationState.isRequired,
            banana: NavigationPropTypes.navigationState.isRequired,
            orange: NavigationPropTypes.navigationState.isRequired,
            tabs: NavigationPropTypes.navigationState.isRequired,
        }),
        navigate: PropTypes.func.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this._back = this._back.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }

    render(){
        const {appNavigationState} = this.props;
        const {tabs} = appNavigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const scenes = appNavigationState[tabKey];
        return (
            <View style={styles.navigator}>
                <NavigationCardStack
                    key={'stack_' + tabKey}
                    onNavigateBack={this._back}
                    navigationState={scenes}
                    renderHeader={this._renderHeader}
                    renderScene={this._renderScene}
                    style={styles.navigatorCardStack}
                />
                <YourTabs
                    navigationState={tabs}
                />
            </View>
        );
    }

    _renderHeader(sceneProps){
        return (
            <YourHeader
                {...sceneProps}
            />
        );
    }

    _renderScene(sceneProps){
        return (
            <YourScene
                {...sceneProps}
            />
        );
    }

    _back() {
        this.props.navigate({type: 'pop'});
    }
});

const YourHeader = createAppNavigationContainer(class extends Component {
    static propTypes = {
        ...NavigationPropTypes.SceneRendererProps,
        navigate: PropTypes.func.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this._back = this._back.bind(this);
        this._renderTitleComponent = this._renderTitleComponent.bind(this);
    }

    render(){
        return (
            <NavigationHeader
                {...this.props}
                renderTitleComponent={this._renderTitleComponent}
                onNavigateBack={this._back}
            />
        );
    }

    _back(){
        this.props.navigate({type: 'pop'});
    }

    _renderTitleComponent(props) {
        return (
            <NavigationHeader.Title>
                {props.scene.route.key}
            </NavigationHeader.Title>
        );
    }
});

const YourScene = createAppNavigationContainer(class extends Component {
    static propTypes = {
        ...NavigationPropTypes.SceneRendererProps,
        navigate: PropTypes.func.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this._exit = this._exit.bind(this);
        this._popRoute = this._popRoute.bind(this);
        this._pushRoute = this._pushRoute.bind(this);
    }

    render() {
        return (
            <ScrollView>
                <NavigationExampleRow
                    text="Push Route"
                    onPress={this._pushRoute}
                />
                <NavigationExampleRow
                    text="Pop Route"
                    onPress={this._popRoute}
                />
                <NavigationExampleRow
                    text="Exit Header + Scenes + Tabs Example"
                    onPress={this._exit}
                />
            </ScrollView>
        );
    }

    _pushRoute(){
        // Just push a route with a new unique key.
        const route = {key: '[' + this.props.scenes.length + ']-' + Date.now()};
        this.props.navigate({type: 'push', route});
    }

    _popRoute(){
        this.props.navigate({type: 'pop'});
    }

    _exit(){
        this.props.navigate({type: 'exit'});
    }
});

const YourTabs = createAppNavigationContainer(class extends Component {
    static propTypes = {
        navigationState: NavigationPropTypes.navigationState.isRequired,
        navigate: PropTypes.func.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <View style={styles.tabs}>
                {this.props.navigationState.routes.map(this._renderTab, this)}
            </View>
        );
    }

    _renderTab(route, index){
        return (
            <YourTab
                key={route.key}
                route={route}
                selected={this.props.navigationState.index === index}
            />
        );
    }
});

// Next step.
// Define your own Tab
const YourTab = createAppNavigationContainer(class extends Component {

    static propTypes = {
        navigate: PropTypes.func.isRequired,
        route: NavigationPropTypes.navigationRoute.isRequired,
        selected: PropTypes.bool.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this._onPress = this._onPress.bind(this);
    }

    render(){
        const style = [styles.tabText];
        if (this.props.selected) {
            style.push(styles.tabSelected);
        }
        return (
            <TouchableOpacity style={styles.tab} onPress={this._onPress}>
                <Text style={style}>
                    {this.props.route.key}
                </Text>
            </TouchableOpacity>
        );
    }

    _onPress() {
        this.props.navigate({type: 'selectTab', tabKey: this.props.route.key});
    }
});

const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    navigatorCardStack: {
        flex: 20,
    },
    tabs: {
        flex: 1,
        flexDirection: 'row',
    },
    tab: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    tabText: {
        color: '#222',
        fontWeight: '500',
    },
    tabSelected: {
        color: 'blue',
    },
    row: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    rowText: {
        fontSize: 17,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
    },
});

/*
function MyChatAppReducer(lastState, action) {
    let state = lastState;
    if (!state) {
        state = {
            scenes: [
                {key: 'home'}
            ],
        };
    }
    if (action.type === 'back' && state.scenes.length > 1) {
        return {
            scenes: state.scenes.slice(0, state.scenes.length - 1),
        };
    }
    if (action.type === 'openChat') {
        return {
            scenes: [
                ...state.scenes,
                {
                    type: 'chat',
                    key: action.id
                }
            ],
        };
    }
    return state;
}

function HomeView(props) {
    return (
        <Text
            onPress={() => {
                props.dispatch({ type: 'openChat', id: 'A' });
            }}>
            This is the home screen. Tap to open Chat A.
        </Text>
    );
}

function ChatView(props) {
    return (
        <Text
            onPress={() => {
                props.dispatch({ type: 'back' });
            }}>
            This is chat {props.id}. Tap to go back home.
        </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30,
    },
});

export default class lb extends Component {
    constructor(props) {
        super(props);
        this.state = MyChatAppReducer(null, { type: 'init' });
    }
    dispatch(action) {
        this.setState(MyChatAppReducer(this.state, action));
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderCurrentScene()}
            </View>
        );
    }
    renderCurrentScene() {
        const scene = this.state.scenes[this.state.scenes.length - 1];
        if (scene.key === 'home') {
            return (
                <HomeView
                    dispatch={this.dispatch.bind(this)}
                />
            );
        }
        if (scene.type === 'chat') {
            return (
                <ChatView
                    id={scene.key}
                    dispatch={this.dispatch.bind(this)}
                />
            );
        }
        return null;
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            active: 'home',
            footerTabs: {
                index: 0, //point to the current state.
                routes: [
                    {key: 'home'},
                    {key: 'community'},
                    {key: 'qa'},
                    {key: 'message'},
                    {key: 'my'},
                ],
            }
        };

        this._navigate = this._navigate.bind(this);
    }

    _navigate(action){
        switch(type){
        }

        if(this.state.footerTabs !== ){
            this.setState({navigationSate: navigationSate});
        }
    }

    render() {
        const scene = this.state.footerTabs.routes[this.state.footerTabs.routes.length - 1];
        if (scene.key === 'home') {
            return <Text>Home</Text>;
        }
        if (scene.key === 'community') {
            return <Text>{scene.key}</Text>
        }
        return null;

        return (
            <Container theme={baseTheme}>
                <Header>
                    <Title>首页</Title>
                </Header>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button
                            active={this.state.active === 'home'}
                            onPress={() => {
                                this.setState({active: 'home',});
                            }}>
                            首页
                            <Icon name='ios-home-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'community'}
                            onPress={() => {
                                this.setState({active: 'community',});
                            }}>
                            社区
                            <Icon name='ios-people-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'QA'}
                            onPress={() => {
                                this.setState({active: 'QA',});
                            }}>
                            问答
                            <Icon name='ios-bulb-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'message'}
                            onPress={() => {
                                this.setState({active: 'message',});
                            }}>
                            <Badge>2</Badge>
                            消息
                            <Icon name='ios-mail-outline'/>
                        </Button>
                        <Button
                            active={this.state.active === 'my'}
                            onPress={() => {
                                this.setState({active: 'my',});
                            }}>
                            我
                            <Icon name='ios-person-outline'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}*/

AppRegistry.registerComponent('lb', () => lb);
