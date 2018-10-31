import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, LOADING, NO_LOADING } from "./types";

export const signup = (formProps, callback) => async dispatch => {
    try {
        dispatch({ type: LOADING });
        const response = await axios.post('http://localhost:3090/signup', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
    
    dispatch({ type: NO_LOADING });
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    };
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        dispatch({ type: LOADING });
        const response = await axios.post('http://localhost:3090/signin', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
    
    dispatch({ type: NO_LOADING });
};
