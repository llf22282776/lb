/**
 * Created by bitholic on 2017/2/26.
 */

export const getSubString = (str, len) => {
    if(str.length <= len)
        return str;
    else
        return str.substring(0, len) + '...';
};