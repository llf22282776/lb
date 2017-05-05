import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Text,
    Alert } from 'react-native';
import {
    Container,
    Content,
    Header,
    Title,
    Left,
    Body,
    Right,
    Thumbnail,
    Card,
    CardItem,
    Item,
    Icon,
    Input,
    Button,

    Form,
    InputGroup,
    Badge,
    ListItem
} from 'native-base';
import * as serverAddress from "../util/serverAddress"
import { Grid, Row, Col } from 'react-native-easy-grid';
var i=0;
export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        setTimeout(
            () => {
                if(i == 1)return ;
                i++;
                this.props.push({ key: 'home' });  
            }, 500
        );

    }
    render() {
       return (
         <View style={styles.container}>
            <Text style={styles.welcome}>
                Road Baby,easy your way!
            </Text>

            <Text style={styles.instructions}>
                版权所有，侵权必究
        </Text>
        </View>


       );


    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 27,
        textAlign: 'center',
        marginBottom: 100,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 200,
    },
});