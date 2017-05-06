'use strict';

import React, { Component } from 'react';
import {
    View,
    Image,
    ListView,
    Alert
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    List,
    ListItem,
    Body,
    Right,
    Thumbnail,
    Card,
    CardItem,
    Item,
    Icon,
    Input,
    Button,
    Text
} from 'native-base';
import * as serverAddress from "../util/serverAddress"
export default class ComplexDetailPage extends Component {
    constructor(props) {
        super(props);
        this.toLast = this.toLast.bind(this);
    }

    render() {
        return (
            <Container>
                <Header >
                    <Left>
                        <Button transparent onPress={this.toLast}>
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>
                                {this.props.refQuestion}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                {this.props.answer}
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )



    }

    toLast() {
        this.props.pop();
    }
}