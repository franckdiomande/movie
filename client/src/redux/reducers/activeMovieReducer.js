import { MOVIE_SELECTED } from "../actions";

const activeMovie = (state = null, action)=>{
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