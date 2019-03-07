import {combineReducers} from "redux";
import activeMovie from './activeMovieReducer'
import moviesReducer from "./getMoviesReducer";

const rootReducers = combineReducers({
    movies: moviesReducer,
    activeMovie
});

export default rootReducers;