import React from 'react';
import {connect} from 'react-redux';
import {selectMovie} from "../../redux/actions";
import './movie-list-container.scss';
import MovieCardComponent from "../../components/MovieCardComponent/MovieCardComponent.jsx";
import {withRouter} from "react-router";

import { getMovies } from "../../redux/actions/getMoviesAction";

class MovieListContainer extends React.Component {
    constructor(props){
        super(props);
        props.getMovies();
    }

    // componentDidMount() {
    //     this.props.getMovies();
        // getMovies();
    // }

    render() {
        const { error, loading, movies } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        
        for(let i = 0; i < movies.length; i++){
            let movie = movies[i];
            console.log(movie["rating"])
            if (movie["rating"] && movie["rating"].length > 0) {
                let sum = 0;
                movie.rating.forEach(elem => {
                    sum += elem.rating;
                });
                movie.average = sum / movie.rating.length;
            } else {
                movie.average = "Not yet"
            }
            movies[i] = movie;
        }

        return (
            <div className={'_container _container-4'} id={'movie-list-container'}>
                {
                    movies.map((movie, key) => {
                        return (
                            <div className={'_box'} key={key}>
                                <MovieCardComponent movie={movie} onClick={()=>{this.props.selectMovie(movie); this.props.history.push('/details')}}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.items,
        loading: state.movies.loading,
        error: state.movies.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovies: ()=>dispatch(getMovies()),
        selectMovie: (movie)=>dispatch(selectMovie(movie)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieListContainer));