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
import {View} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class SearchPageComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.renderSpinner = this.renderSpinner.bind(this);
    }

    renderSpinner(search) {
        if (search.fetching === true) {
            return <Spinner color='#007aff' size={1}/>
        } else {
            if (search.error !== undefined) {
                return <Title style={{paddingTop: 200}}>加载失败: {search.error.message}</Title>
            }
        }
    }

    render() {
        const {search, inputQuestion, submitQuestion} = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input rounded placeholder="请输入您的问题" value={search.question}
                               onChangeText={(text) => inputQuestion(text)}/>
                    </Item>
                    <Button transparent textStyle={{fontSize: 15}} onPress={() => submitQuestion()}>
                        <Text>搜索</Text>
                    </Button>
                </Header>
                <Content>
                    {this.renderSpinner(search)}
                    <ListItem avatar>
                        <Body>
                        <Text style={{paddingLeft: 230}}>bitholic</Text>
                        <View style={{backgroundColor: '#ccc', borderRadius: 10, paddingLeft: 15, marginLeft: 15, paddingVertical: 10}}>
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
                        <View style={{backgroundColor: '#cde1f9', borderRadius: 10, paddingLeft: 15, marginRight: 15, paddingVertical: 10}}>
                        <Text >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}