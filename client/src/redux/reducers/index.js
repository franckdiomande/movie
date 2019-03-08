import {combineReducers} from "redux";
import activeMovie from './activeMovieReducer'
import moviesReducer from "./getMoviesReducer";
import setFilterReducer from "./setFilterReducer";
import filterMoviesReducer from "./filterMoviesReducer";

const rootReducers = combineReducers({
    movies: moviesReducer,
    activeMovie,
    filters: setFilterReducer,
    filteredMovies: filterMoviesReducer,
});

export default rootReducers;