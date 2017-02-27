/**
 * Created by bitholic on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    Container,
    Header,
    Content,
    Spinner,
    Button,
    Icon,
    Item,
    Input,
    Text,
    Title,
    ListItem,
    Left,
    Body,
    Right,
} from 'native-base';
import {View, Image} from 'react-native';
import {getSubString} from '../util/getSubString';

export default class SearchPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastSubmitText: '',
            searched: false,
        };
        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        //storage.remove({key: 'searchHistory'})
    }

    render() {
        const {search, changeQuestion, getSearchHistory, deleteHistory, getSearchHelp, startInputQuestion, stopInputQuestion, submitQuestion} = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name='ios-search'/>
                        <Input rounded placeholder='请输入您的问题' value={search.question}
                               returnKeyType='search'
                               onChangeText={(text) => {
                                   changeQuestion(text);
                                   getSearchHelp()
                               }}
                               onFocus={() => {
                                   startInputQuestion();
                                   if (search.question === '') {
                                       this.props.getSearchHistory();
                                   }
                               }}
                               onSubmitEditing={() => {
                                   if (search.question !== '') {
                                       submitQuestion();
                                       this.setState({
                                           lastSubmitText: search.question,
                                           searched: true,
                                       });
                                   }
                               }}
                        />
                        <Icon name='ios-close' onPress={() => changeQuestion('')}/>
                    </Item>
                    <View
                        style={search.inputting ? {} : styles.hidden}
                        pointerEvents={search.inputting ? 'auto' : 'none'}
                        removeClippedSubviews={!search.inputting}>
                        <Button transparent fontSize={{fontSize: 15}}
                                onPress={() => {
                                    changeQuestion(this.state.lastSubmitText);
                                    stopInputQuestion();
                                }}>
                            <Text>取消</Text>
                        </Button>
                    </View>
                </Header>
                {this.renderContent(search)}
            </Container>
        )
    }

    renderContent(search) {
        if (search.inputting) {
            if (search.question === '') {
                return (
                    <View style={{height: 300}}>
                        <Content>
                            {this.renderListItems(search.searchHistory.reverse())}
                            <ListItem icon onPress={() => this.props.deleteHistory()}>
                                <Body style={{alignItems: 'center'}}>
                                <Text style={{color: 'red', fontSize: 13}}>清除历史记录</Text>
                                </Body>
                                <Right>
                                    <Icon name='ios-close' style={{color: 'red'}}/>
                                </Right>
                            </ListItem>
                        </Content>
                    </View>
                );
            } else {
                return (
                    <Content>
                        { this.renderListItems(search.searchHelps) }
                    </Content>
                );
            }
        } else {
            if (search.fetching === true) {
                return (
                    <Content>
                        <Spinner color='#007aff' size={1}/>
                    </Content>
                );
            } else {
                if (search.error === undefined) {
                    if (!this.state.searched && search.question === '') {
                        return (
                            <View style={{alignItems: 'center', paddingTop: 140}}>
                                <Image source={require('../resources/robot.png') }/>
                                <Title style={{fontSize: 25, color: '#bfbfbf', paddingTop: 40}}>您好，请问您需要什么帮助？</Title>
                            </View>
                        );
                    } else {
                        return (
                            <Content>
                                {this.renderResults(search.answers)}
                            </Content>
                        );
                    }
                } else {
                    return (
                        <Content>
                            <Body>
                            <Icon name='ios-alert-outline' style={{color: '#ccc', fontSize: 100, paddingTop: 150}}/>
                            <Text style={{fontSize: 15}}>加载失败: {search.error.message}</Text>
                            </Body>
                        </Content>
                    );
                }
            }
        }
    }

    renderListItems(items) {
        if (items instanceof Array) {
            return items.map((text, id) => {
                return (
                    <ListItem icon key={id}>
                        <Body>
                        <Text>{text}</Text>
                        </Body>
                        <Right>
                            <Icon name='ios-arrow-forward'/>
                        </Right>
                    </ListItem>
                )
            })
        }
    }

    renderResults(answers) {
        if (answers instanceof Array) {
            return answers.map((qa, id) => {
                return (
                    <ListItem
                        key={id}
                        style={{paddingHorizontal: 3}}
                        onPress={() => this.props.push({key: 'answerDetail', qa: qa})}
                    >
                        <Body>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: '#007aff'
                        }}>{getSubString(qa.question, 19)}</Text>
                        <Text style={{fontSize: 14, paddingTop: 12}}>{getSubString(qa.answers[0], 43)}</Text>
                        </Body>
                        <Icon name='ios-arrow-forward' style={{fontSize: 20, paddingRight: 8, color: '#007aff'}}/>
                    </ListItem>
                )
            })
        }
    }
}

const styles = {
    hidden: {
        width: 0,
        overflow: 'hidden',
        opacity: 0,
    },
};
