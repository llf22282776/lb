/**
 * Created by bitholic on 2017/2/18.
 */
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

let storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});

module.exports = storage;

