/**
 * Created by bitholic on 2017/2/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Container, Title, Text, Button} from 'native-base';

export default class LoginPage extends Component {
    render() {
        const {push, pop} = this.props;
        return (
            <Container>
                <Title>LoginPage</Title>
                <Button light onPress={() => push('home')}>
                    <Text>Log in</Text>
                </Button>
                <Button light onPress={() => push('register')}>
                    <Text>Register</Text>
                </Button>
                <Button light onPress={() => push('forget')}>
                    <Text>Forget password</Text>
                </Button>
            </Container>
        )
    }
}
