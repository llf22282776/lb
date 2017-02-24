/**
 * Created by bitholic on 2017/2/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Container, Title, Text, Button} from 'native-base';

export default class RegisterPage extends Component {
    render() {
        const {push, pop} = this.props;
        return (
            <Container>
                <Title>This is the register page</Title>
                <Button light onPress={() => pop()}>
                    <Text>Back</Text>
                </Button>
            </Container>
        )
    }
}
