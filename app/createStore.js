import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import counterReducer from './reducers/counterReducer';
import loadDataReducer from './reducers/loadDataReducer';
import updateTextReducer from './reducers/updateTextReducer';
import appNavigationReducer from './reducers/appNavigationReducer';


const logger = createLogger();

export default (initialState= {}) => (
    createStore(
        combineReducers({
            counter: counterReducer,
            async: loadDataReducer,
            update: updateTextReducer,
            navigation: appNavigationReducer,
        }),
        initialState,
        applyMiddleware(thunk, promiseMiddleware(), logger)
    )
);