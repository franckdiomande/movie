import Api from '../../Api.js';
export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export function getMovies() {
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return Api.getMovies()
            .then((data)=>{
                return dispatch(fetchMoviesSuccess(data));
            })
            .catch((error)=>{
                return dispatch(fetchMoviesFailure(error))
            });
    };
}

/*function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}*/

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: {movies}
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: {error}
});