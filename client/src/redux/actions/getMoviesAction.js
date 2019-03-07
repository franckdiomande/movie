export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

let token = localStorage.getItem('token');
let headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Content-Type", "application/json");
headers.append('Authorization', token);


export function getMovies() {
    return dispatch => {
        dispatch(fetchMoviesBegin());
        // return Api.getMovies((data)=>{
        //     dispatch(fetchMoviesSuccess(data));
        //     return data;
        // });

        return fetch('http://localhost:9080/movies', {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data.error){
                    return dispatch(fetchMoviesFailure(data.error))
                }
                return dispatch(fetchMoviesSuccess(data));
                // return data;
            })
            .catch((error) => {
                return dispatch(fetchMoviesFailure(error))
            });

        // return fetch('http://localhost:9080/movies')
        //     .then(handleErrors)
        //     .then(res => res.json())
        //     .then(json => {
        //         dispatch(fetchMoviesSuccess(json.movies));
        //         return json.movies;
        //     })
        //     .catch(error => dispatch(fetchMoviesFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchMoviesBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {movies}
});

export const fetchMoviesFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {error}
});