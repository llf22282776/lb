/**
 * Created by bitholic on 2017/2/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Container, Title, Text, Button} from 'native-base';

export default class ForgetPasswordPage extends Component {
    render() {
        const {push, pop} = this.props;
        return (
            <Container>
                <Title>This is the forget password page</Title>
                <Button light onPress={() => pop()}>
                    <Text>Back</Text>
                </Button>
            </Container>
        )
    }
}
