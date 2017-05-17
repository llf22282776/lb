import React, { Component } from 'react';
import { TextInput } from 'react-native';
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
export default class CarBindPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: "",
            text2: "",
            text3: "",
            text4: "",
        }
        this.onTextChangeFuc1 = this.onTextChangeFuc1.bind(this);
        this.onTextChangeFuc2 = this.onTextChangeFuc2.bind(this);
        this.onTextChangeFuc3 = this.onTextChangeFuc3.bind(this);

    }
    render() {
        return (

            <Container>
                <Header >


                    <Left>
                        <Button transparent onPress={() => {

                           

                            this.props.pop();




                        }}>
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>绑定车辆</Title>
                    </Body>
                </Header>
                <Content>
               
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />

                    <ListItem icon>
                        <Left>
                            <Icon name="ios-car" />
                        </Left>
                        <Body>
                            <Input onChangeText={this.onTextChangeFuc2} placeholder="车牌号" />
                        </Body>
                    </ListItem>
                    <ListItem itemDivider style={{ backgroundColor: 'transparent' }} />

                    <ListItem icon>
                        <Left>
                            <Icon name="ios-car" />
                        </Left>
                        <Body>
                            <Input onChangeText={this.onTextChangeFuc3} placeholder="车架后六位" />
                        </Body>

                    </ListItem>
                    <Button full success onPress={()=>{
                         this.props.call_back(
                              {

                                    carName: this.state.text1,
                                    carCard: this.state.text2,
                                    carSeq: this.state.text3,
                                    carId: 1,
                                    carRows: [
                                        {
                                            date: "2017-04-09",
                                            score: "1",
                                            position: "陕西省渭南市北大街中段",
                                            reason: "变道压线"
                                        }


                                    ]

                                }

                            
                            );
                         this.props.pop();

                        
                        }}>
                      
                        <Text>
                            确认绑定
                        </Text>
                    </Button>
                </Content>
            </Container>)



    }

    onTextChangeFuc1(data) {
        this.setState({ text1: data })
    }
    onTextChangeFuc2(data) {
        this.setState({ text2: data })
    }
    onTextChangeFuc3(data) {
        this.setState({ text3: data })
    }




}