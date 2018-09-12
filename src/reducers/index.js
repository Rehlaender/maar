import { commbineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default commbineReducers ({
    router: routerReducer,
});