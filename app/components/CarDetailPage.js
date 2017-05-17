import React, { Component } from 'react';
import { TextInput, ListView } from 'react-native';
import {
    Container,
    Header,
    Button,
    Content,
    Card,
    CardItem,
    Left,
    ListItem,
    Text,
    Thumbnail,
    Right,
    Icon,
    Picker,
    Title,
    Input,
    Body,
} from 'native-base';
import * as sad from '../util/serverAddress'
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class CarDetailPage extends Component {
    constructor(props) {
        super(props);
        this.renderFunc = this.renderFunc.bind(this);
        this.state = {
            carData: this.props.carData,
            carRows:
            [
                {
                    date: "2017-04-30",
                    score: "2",
                    position: "陕西省西安市雁塔南路",
                    reason: "超速行驶"
                }
            ]



        }
    }
    render() {


        return (
            <Container>
                <Header Title>
                    <Left>
                        <Button transparent onPress={() => { this.props.pop() }}>
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>车辆详情</Title>
                    </Body>
                </Header>
                <Content>
                    


                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />

                    <ListItem icon>
                        <Left>
                            <Icon name="ios-car" />
                        </Left>
                        <Body>
                            <Text>车牌号</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.carData.carCard}</Text>
                        </Right>
                    </ListItem>


                    <ListItem icon>
                        <Left>
                            <Icon name="ios-car" />
                        </Left>
                        <Body>
                            <Text>机动车后六位</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.carData.carSeq}</Text>
                        </Right>
                    </ListItem>

                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} >
                        <Text>违章记录</Text>
                    </ListItem>
                    <ListView enableEmptySections dataSource={ds.cloneWithRows(this.state.carData.carRows)} renderRow={this.renderFunc} />
                </Content>
            </Container>
        );
    }
    renderFunc(data) {
        return (

            <Card>
                <CardItem header bordered={true}>
                    <Text>时间:{data.date}</Text>

                </CardItem>
                <CardItem header bordered={true}>
                    <Text>地点:{data.position}</Text>

                </CardItem>
                <CardItem header bordered={true}>

                    <Text>所扣分数:{data.score}</Text>
                </CardItem>
                <CardItem header bordered={true}>
                    <Text>原因</Text>
                </CardItem>
                <CardItem bordered={true}>

                    <Text>{data.reason}</Text>
                </CardItem>
            </Card>



        );


    }

}