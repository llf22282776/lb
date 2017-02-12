/**
 * react-native app ios entrance
 */

'use strict';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './app/App';
//import App from './app/containers/NavigatorTest'

AppRegistry.registerComponent('lb', () => App);
