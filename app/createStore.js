import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import counterReducer from './reducers/counterReducer';
import loadDataReducer from './reducers/loadDataReducer';
import updateTextReducer from './reducers/updateTextReducer';


const logger = createLogger();

export default (initialState= {}) => (
    createStore(
        combineReducers({
            counter: counterReducer,
            async: loadDataReducer,
            update: updateTextReducer,
        }),
        initialState,
        applyMiddleware(thunk, promise, logger)
    )
);
