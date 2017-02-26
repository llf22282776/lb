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
    Card,
    CardItem,
    Thumbnail,
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
                        <Icon name="ios-search"/>
                        <Input rounded placeholder="请输入您的问题" value={search.question}
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
                               onBlur={() => stopInputQuestion()}
                        />
                        <Icon name="ios-close"/>
                    </Item>
                    <Button transparent fontSize={{fontSize: 15}}
                            onPress={() => {
                                if (search.question !== '') {
                                    submitQuestion();
                                }
                            }}>
                        <Text>搜索</Text>
                    </Button>
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
                            {this.renderListItems(search.searchHistory)}
                            <ListItem icon onPress={() => this.props.deleteHistory()}>
                                <Body style={{alignItems: 'center'}}>
                                <Text style={{color: 'red', fontSize: 13}}>清除历史记录</Text>
                                </Body>
                                <Right>
                                    <Icon name="ios-close" style={{color: 'red'}}/>
                                </Right>
                            </ListItem>
                        </Content>
                    </View>
                )
            } else {
                return (
                    <Content>
                        { this.renderListItems(search.searchHelps) }
                    </Content>
                )
            }
        } else {
            if (search.fetching === true) {
                return (
                    <Content>
                        <Spinner color='#007aff' size={1}/>
                    </Content>
                )
            } else {
                if (search.error !== undefined) {
                    return (
                        <Content>
                            <Body>
                            <Icon name='ios-alert-outline' style={{color: '#ccc', fontSize: 100, paddingTop: 150}}/>
                            <Text style={{fontSize: 15}}>加载失败: {search.error.message}</Text>
                            </Body>
                        </Content>
                    )
                } else {
                    return (
                        <Content>
                            {this.renderResults(search.answers)}
                        </Content>
                    )
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
                            <Icon name="ios-arrow-forward"/>
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
                    <ListItem key={id}>
                        <Body>
                        <Title>{qa.question}</Title>
                        <Text>{getSubString(qa.answers[0], 40)}</Text>
                        </Body>
                    </ListItem>
                )
            })
        }
    }
}

/*
 <ListItem avatar>
 <Body>
 <Text style={{paddingLeft: 230}}>bitholic</Text>
 <View style={{
 backgroundColor: '#ccc',
 borderRadius: 10,
 paddingLeft: 15,
 marginLeft: 15,
 paddingVertical: 10
 }}>
 <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</Text>
 </View>
 </Body>
 <Right>
 <Thumbnail source={require('../resources/user_selected.png')}/>
 </Right>
 </ListItem>
 <ListItem avatar>
 <Right>
 <Thumbnail source={require('../resources/qa_selected.png')}/>
 </Right>
 <Body>
 <Text>Mr.Robot</Text>
 <View style={{
 backgroundColor: '#cde1f9',
 borderRadius: 10,
 paddingLeft: 15,
 marginRight: 15,
 paddingVertical: 10
 }}>
 <Text >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an
 unknown printer took a galley of type and scrambled it to make a type specimen book.
 It
 has survived not only five centuries, but also the leap into electronic typesetting,
 remaining essentially unchanged. It was popularised in the 1960s with the release of
 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
 publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
 </View>
 </Body>
 </ListItem>
 */
