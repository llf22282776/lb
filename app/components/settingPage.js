import React, {Component} from 'react';
import {
    Button,
    Container,
    Thumbnail,
    Text,
    Title,
    Content,
    Header,
    ListItem,
    Left,
    Body,
    Right,
    Card,
    Icon,
    CardItem
} from 'native-base';
import {View} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';

export default class SettingPage extends Component {
       constructor(props) {
        super(props);
        this.state = {
            topicShow: false,
            username: "test_user",
            account: "1308-504-9985"
        }

        this.styles = {
            rowButton: {
                height: 100,
                flex: 1
            }
        }
    }

    topicClick = () => {
        this.setState({topicShow: !this.state.topicShow});
    }

    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>{this.props.pop();}}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>
                </Header>
                <Content>
                   
                </Content>
            </Container>
        );
    }

}

