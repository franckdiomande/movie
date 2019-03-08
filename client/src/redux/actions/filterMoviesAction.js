import Api from '../../Api.js';

export const FETCH_FILTER_MOVIES_BEGIN = 'FETCH_FILTER_MOVIES_BEGIN';
export const FETCH_FILTER_MOVIES_SUCCESS = 'FETCH_FILTER_MOVIES_SUCCESS';
export const FETCH_FILTER_MOVIES_FAILURE = 'FETCH_FILTER_MOVIES_FAILURE';
export const RESET_FILTER_MOVIES = 'RESET_FILTER_MOVIES';

const resetFilter = () => ({type: RESET_FILTER_MOVIES, payload: {filterIsActive: false}});

export function resetFilterMovies(){
    return dispatch => {
        return dispatch(resetFilter());
    };
}

export function filterMovies(filters){

    return dispatch => {
        dispatch(fetchMoviesBegin());
        return Api.filterMovies(filters)
            .then((data)=>{
                return dispatch(fetchMoviesSuccess(data));
            })
            .catch((error)=>{
                return dispatch(fetchMoviesFailure(error))
            });
    };

}


const fetchMoviesBegin = () => ({
    type: FETCH_FILTER_MOVIES_BEGIN,
    payload: {filterIsActive: true}
});

const fetchMoviesSuccess = filteredMovies => ({
    type: FETCH_FILTER_MOVIES_SUCCESS,
    payload: {filteredMovies, filterIsActive: true}
});

const fetchMoviesFailure = error => ({
    type: FETCH_FILTER_MOVIES_FAILURE,
    payload: {error, filterIsActive: true}
});