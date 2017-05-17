import React, { Component } from 'react';
import {
    
    StyleSheet,
    View,
    Image,
    TextInput,
    Text,
    Alert
} from 'react-native';
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

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        setTimeout(
            () => {
                if (serverAddress.i == 1) return;
                serverAddress.i++;
                this.props.push({ key: 'home' });
            }, 500
        );

    }
    render() {
        return (

            <View style={styles.container} onTouchEnd={()=>{this.props.push({key:"login"})}}>
                {/*<Text style={styles.welcome}>
                    RoadBaby
            </Text>*/}
                <Text style={{
                    fontStyle:'normal',
                    fontSize: 27,
                    textAlign: 'center',
                    marginTop: 150,
                }}>
                    Easy your way
            </Text>


                <Text style={styles.instructions}>
                    DIG团队倾情奉献
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
        fontStyle:'normal',
        fontSize: 27,
        textAlign: 'center',
        marginTop: 150,
  

    },
    instructions: {
        textAlign: 'center',
        fontSize: 12,
        color: '#777777',
        marginTop: 350,
    },
    welcome1: {
        fontSize: 27,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'asfddfsf',
        



    }
});