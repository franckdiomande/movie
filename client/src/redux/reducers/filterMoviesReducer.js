import {
    FETCH_FILTER_MOVIES_BEGIN,
    FETCH_FILTER_MOVIES_SUCCESS,
    FETCH_FILTER_MOVIES_FAILURE,
    RESET_FILTER_MOVIES
} from '../actions/filterMoviesAction.js';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function getMoviesReducer(state = initialState, action) {
    switch(action.type) {

        case RESET_FILTER_MOVIES:
            return {
                ...state,
                filterIsActive: action.payload.filterIsActive,
            };

        case FETCH_FILTER_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_FILTER_MOVIES_SUCCESS:
            /*return Object.assign({}, state, {
                filteredMovies: {
                    items: action.payload.items,
                }
            });*/
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload.filteredMovies,
                filterIsActive: action.payload.filterIsActive,
            };

        case FETCH_FILTER_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}