export const MOVIE_SELECTED = 'MOVIE_SELECTED';

export function selectMovie(movie){

    console.log('---------->');
    console.log(movie);
    console.log('---------->');

    return {
        type: MOVIE_SELECTED,
        payload: movie
    }
    
}