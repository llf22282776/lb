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
    List


} from 'native-base';
import * as sad from '../util/serverAddress'
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class CarListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carList: [
                {
                    carName: "一汽大众",
                    carCard: "陕A666666",
                    carSeq: "666666",
                    carId: 1,
                    carRows: [
                        {
                            date: "2017-04-09",
                            score: "1",
                            position: "陕西省渭南市北大街中段",
                            reason: "变道压线"
                        }


                    ]
                },
                {
                    carName: "广州本田",
                    carCard: "陕B666666",
                    carSeq: "666667",
                    carId: 2,
                    carRows: [
                        {
                            date: "2017-04-30",
                            score: "2",
                            position: "陕西省西安市雁塔南路",
                            reason: "超速行驶"
                        }

                    ]
                }
            ]

        }
        this.renderRow = this.renderRow.bind(this);
        this.toDetail = this.toDetail.bind(this);
    }
    render() {
        return (
            <Container>
                <Header >
                    <Left>
                        <Button  transparent onPress={() => { this.props.pop() }}>
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                      <Body>
                        <Title>车辆列表</Title>
                    </Body>
                </Header>
                <Content>
                    <Button   full info  onPress={()=>{ this.props.push({key:"carBindPage"})}}>
                        <Icon name="ios-add" />
                        <Text>绑定</Text>
                    </Button>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />
                    <ListItem itemDivider  >
                        <Text style={{textAlign:"center"}}>已绑定车辆</Text>
                    </ListItem>
                    <List enableEmptySections renderRow={this.renderRow} dataSource={ds.cloneWithRows(this.state.carList)} />
                    
                </Content>
            </Container>




        );




    }
    renderRow(data) {
        return (

            <ListItem icon>

                <Body>
                    <Text>{data.carName}</Text>
                </Body>
                <Right>
                    
                        <Text style={{color:"#009e8e"}}>{data.carCard} </Text>
                        <Icon style={{color:"#0e53a7"}} name="ios-arrow-forward" onPress={ ()=>{this.toDetail(data)}} />
                  
                </Right>
            </ListItem>

        );
    }
    toDetail(data) {
        var json = {
            key: "carDetailPage",
            props:{
                carData: data
            }
        };
        this.props.push(json);
    }

}