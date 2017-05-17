/**
 * Created by bitholic on 2017/2/15.
 */
'use strict';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import storage from './config/asyncStorageConf';
import navigatorReducer from './reducers/navigatorReducer';
import searchReducer from './reducers/searchReducer';
import updateUserInfoReducer from './reducers/updateUserInfoReducer';

global.storage = storage;

const logger = createLogger();

const store = createStore(
    combineReducers({
        navigator: navigatorReducer,
        search: searchReducer,
        user: updateUserInfoReducer,
        
    }),
    {},  //initialState
    applyMiddleware(thunk, promiseMiddleware(), logger)
);

export default store;