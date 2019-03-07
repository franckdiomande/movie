import {combineReducers} from "redux";
import moviesReducer from './moviesReducer';
import activeMovie from './activeMovieReducer'

const rootReducers = combineReducers({
    movies: moviesReducer,
    activeMovie: activeMovie
});

export default rootReducers;