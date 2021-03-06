/**
 * Created by bitholic on 2017/2/16.
 */
import React, { Component, PropTypes } from 'react';
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
    Card,
    CardItem
} from 'native-base';
import { TextInput, Alert, ListView } from 'react-native';
import { View, Image } from 'react-native';
import { getSubString } from '../util/getSubString';
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class SearchPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastSubmitText: '',
            searched: false,
            ls: []
        };
        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        //storage.remove({key: 'searchHistory'})
    }

    render() {
        const { search, answers, changeQuestion, getSearchHistory, deleteHistory, getSearchHelp, startInputQuestion, stopInputQuestion, submitQuestion } = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name='ios-search' onPress={() => {
                            if (search.question !== '') {

                                submitQuestion(search.question);
                                this.setState({
                                    lastSubmitText: search.question,
                                    searched: true,
                                });
                            }
                        }} />
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
                                    submitQuestion(search.question);
                                    this.setState({
                                        lastSubmitText: search.question,
                                        searched: true,
                                    });
                                }
                            }}
                        />
                        <Icon name='ios-close' onPress={() => changeQuestion('')} />
                    </Item>
                    <View
                        style={search.inputting ? {} : styles.hidden}
                        pointerEvents={search.inputting ? 'auto' : 'none'}
                        removeClippedSubviews={!search.inputting}>
                        <Button transparent fontSize={{ fontSize: 15 }}
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
                    <View style={{ height: 300 }}>
                        <Content>
                            {this.renderListItems(search.searchHistory.reverse())}
                            <ListItem onPress={() => this.props.deleteHistory()}>
                                <Body style={{ borderBottomWidth: 0, alignItems: 'center' }}>
                                    <Text style={{ color: 'red', fontSize: 13 }}>清除历史记录</Text>
                                </Body>
                            </ListItem>
                        </Content>
                    </View>
                );
            } else {
                return (
                    <Content>
                        {this.renderListItems(search.searchHelps)}
                    </Content>
                );
            }
        } else {
            if (search.fetching === true) {
                return (
                    <Content>
                        <Spinner color='#007aff' size={1} />
                    </Content>
                );
            } else {
                if (search.error === undefined) {
                    if (!this.state.searched && search.question === '') {
                        return (
                            <View style={{ alignItems: 'center', paddingTop: 140 }}>
                                <Image source={require('../resources/robot.png')} />
                                <Title style={{ fontSize: 25, color: '#bfbfbf', paddingTop: 40 }}>您好，请问您需要什么帮助？</Title>
                            </View>
                        );
                    } else {
                        console.log("props");
                        //console.log(this.props);
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
                                <Icon name='ios-alert-outline' style={{ color: '#ccc', fontSize: 100, paddingTop: 150 }} />
                                <Text style={{ fontSize: 15 }}>加载失败: {search.error.message}</Text>
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
                    <ListItem button icon key={id} onPress={ ()=>{
                         if (text !== '') {
                                    this.props.submitQuestion(text);
                                    this.setState({
                                        lastSubmitText: text,
                                        searched: true,
                                    });
                                }
                        
                        
                        } }>
                        <Body>
                            <Text>{text}</Text>
                        </Body>
                        <Right>
                            <Icon name='ios-arrow-forward' />
                        </Right>
                    </ListItem>
                )
            })
        }
    }

    renderResults(answers) {

        if (answers.type == "easy") {
            //简单类的问题
            return (
                <Card content>
                    <CardItem>
                        <Text>{answers.answer}</Text>
                    </CardItem>
                </Card>
            )

        } else {
            //复杂leiwenti 

            return (

                <Card bordered={true}>
                    <CardItem header bordered={true}>
                        <Text>您要找的是不是以下问题</Text>
                    </CardItem>
                    <ListView dataSource={ds.cloneWithRows(answers.results)} renderRow={
                        (data,sId,rowId) => {
                            if(rowId >= 4)return null;
                            return (

                                <CardItem button bordered={true} onPress={() => { this.toComplexDetailPage(data); }}>
                                    <Text numberOfLines={1} >{data.refQuestion.length>=20?data.refQuestion.substring(0,15)+"..":data.refQuestion}</Text>
                                    <Right>
                                        <Button iconRight transparent onPress={() => { this.toComplexDetailPage(data); }}>
                                            <Icon name="ios-arrow-forward" />
                                        </Button>
                                    </Right>
                                </CardItem>

                            )
                        }} />
                </Card>
            )

        }



    }


    toComplexDetailPage(data) {
        var jsonObj = {
            key: "complexDetailPage",
            props: data
        };
        this.props.push(jsonObj);
    }
}

/*
<Text style={{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#007aff'
}}>{getSubString(qa.question, 19)}</Text>
*/

const styles = {
    hidden: {
        width: 0,
        overflow: 'hidden',
        opacity: 0,
    },
};
