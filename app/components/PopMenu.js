/**
 * Created by bitholic on 2017/2/27.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class PopMenu extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <View>
                    <TouchableOpacity style={styles.firstRow}>
                        <Text> item1 </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.centerRow}>
                        <Text> item2 </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.lastRow}>
                        <Text> item3 </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <TouchableOpacity style={styles.footerRow}>
                        <Text> cancel </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingLeft: 30,
    },
    firstRow: {
        width: width - 60,
        height: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'grey',
    },
    centerRow: {
        width: width - 60,
        height: 30,
        backgroundColor: 'grey',
    },
    lastRow: {
        width: width - 60,
        height: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'grey',
    },
    footerRow: {
        width: width - 60,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'grey',
    },
});
