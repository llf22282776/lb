/**
 * Created by bitholic on 2017/2/1.
 */
import {createStore} from 'redux';
import reducer from './reducers';

export default function configureStore(){
    const store = createStore(reducer);
    return store;
};
