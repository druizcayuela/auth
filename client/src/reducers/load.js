import { LOADING, NO_LOADING } from '../actions/types';

const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case NO_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
}