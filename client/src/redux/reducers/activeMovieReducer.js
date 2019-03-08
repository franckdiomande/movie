import { MOVIE_SELECTED } from "../actions/selectMovieAction.js";

const activeMovie = (state = {}, action)=>{
    switch (action.type) {
        case MOVIE_SELECTED:
            return {
                ...state,
                activeMovie: action.payload
            };
        default:
            return state
    }
};

export default activeMovie;