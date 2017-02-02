/**
 * Created by bitholic on 2017/2/1.
 */
import {createStore} from 'redux';

//reducer function
function counter(state, action){
    if(typeof state === 'undefined'){
        return 0;
    }

    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default function configureStore(){
    const store = createStore(counter);
    return store;
};
