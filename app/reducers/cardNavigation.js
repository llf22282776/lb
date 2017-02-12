// /**
//  * Created by bitholic on 2017/2/4.
//  */
//
// import { tabReducer } from 'react-native-navigation-redux-helpers';
//
// const tabs = {
//     key: 'AppTabs',
//     index: 0,
//     routes: [
//         {key: 'home', title: '首页'},
//         {key: 'community', title: '论坛'},
//         {key: 'qa', title: '问答'},
//     ],
// };
// module.exports = tabReducer(tabs);
import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
    key: 'global',
    index: 0,
    routes: [
        {
            key: 'scene1',
            index: 0
        },
    ],
};

module.exports = cardStackReducer(initialState);
