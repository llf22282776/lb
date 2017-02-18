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

export default class SearchPageComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.renderContent = this.renderContent.bind(this);
    }

    renderSearchHelps(searchHelps) {
        return searchHelps.map((text, id) => {
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

    saveHistory(question) {
        let historyRecords;
        storage.load({
            key: 'history',
        }).then(res => {
            historyRecords = res;
            historyRecords.splice(0, 0, question);
        }).catch(err => {
            historyRecords = [];
        });

        storage.save({
            key: 'history',
            rawData: historyRecords
        })
    }

    renderHistory(){
        storage.load({
            key: 'history'
        }).then(ret => {
            console.log(ret);
        }).catch(err=>{
            console.log(err.message);
        })
    }

    renderContent(searchProps) {
        if (searchProps.search.inputting) {
            if(searchProps.search.question === ''){
                return (
                    <Content>
                        <Text>清除历史记录</Text>
                    </Content>
                )
            }else {
                if (searchProps.search.searchHelpFetching) {
                    return (
                        <Content>
                            {this.renderHistory()}
                            <Spinner color='#007aff' size={1}/>
                        </Content>
                    )
                } else {
                    return (
                        <Content>
                            { this.renderSearchHelps(searchProps.search.searchHelps) }
                        </Content>
                    )
                }
            }
        } else {
            if (searchProps.search.fetching === true) {
                return (
                    <Content>
                        <Spinner color='#007aff' size={1}/>
                    </Content>
                )
            } else {
                if (searchProps.search.error !== undefined) {
                    return (
                        <Content>
                            <Body>
                            <Icon name='ios-alert-outline' style={{color: '#ccc', fontSize: 100, paddingTop: 150}}/>
                            <Text style={{fontSize: 15}}>加载失败: {searchProps.search.error.message}</Text>
                            </Body>
                        </Content>
                    )
                } else {
                    return (
                        <Content>
                            <ListItem itemDivider>
                                <Text>{searchProps.search.question}</Text>
                            </ListItem>
                            <ListItem onPress={() => console.log('listitem1 pressed')}>
                                <Body>
                                <Text>中国《道路安全交通法》规定，机动车在高速公路行驶，最高不得超过120km/h的时速。</Text>
                                <Text style={{fontSize: 14, paddingTop: 5, color: '#808080'}}>来源：法律法规</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Body>
                                <Text>中国《道路安全交通法》规定，机动车在高速公路行驶，最高不得超过120km/h的时速。</Text>
                                <Text style={{fontSize: 14, paddingTop: 5, color: '#808080'}}>来源：QA库匹配</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Body>
                                <Text>2017高速公路限速标准:
                                    一、行人、非机动车、拖拉机、轮式专用机械车、铰接式客车。一、行人、非机动车、拖拉机、轮式专用机械车轮式专用机械车、铰接式客车或...</Text>
                                <Text style={{fontSize: 14, paddingTop: 5, color: '#808080'}}>来源：搜索引擎解析</Text>
                                </Body>
                            </ListItem>
                        </Content>
                    )
                }
            }
        }
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input rounded placeholder="请输入您的问题" value={this.props.search.question}
                               onChangeText={(text) => {
                                   this.props.changeQuestion(text);
                                   this.props.getSearchHelp()
                               }}
                               onFocus={() => this.props.startInputQuestion()}
                               onBlur={() => this.props.stopInputQuestion()}
                        />
                    </Item>
                    <Button transparent textStyle={{fontSize: 15}}
                            onPress={() => {this.props.submitQuestion();
                            //this.saveHistory(this.props.search.question)
                            }}
                    >
                        <Text>搜索</Text>
                    </Button>
                </Header>
                {this.renderContent(this.props)}
            </Container>
        )
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
