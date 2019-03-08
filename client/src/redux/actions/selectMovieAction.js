export const MOVIE_SELECTED = 'MOVIE_SELECTED';

export function selectMovie(movie){

    return {
        type: MOVIE_SELECTED,
        payload: movie
    }
    
}