import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import load from './load';

export default combineReducers({
    auth,
    load,
    form: formReducer
});