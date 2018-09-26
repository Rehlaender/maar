import { combineReducers } from 'redux';

import testReducer from './testReducer';
import guyReducer from './guyReducer';

export default combineReducers ({
    testReducer,
    guyReducer
});