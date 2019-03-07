import React from 'react';
import {connect} from 'react-redux';
import {selectMovie} from "../../redux/actions";
import './movie-list-container.scss';
import MovieCardComponent from "../../components/MovieCardComponent/MovieCardComponent.jsx";
import {withRouter} from "react-router";

class MovieListContainer extends React.Component {
    render() {
        return (
            <div className={'_container _container-4'} id={'movie-list-container'}>
                {
                    this.props.movies.map((movie, key) => {
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
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectMovie: (movie)=>dispatch(selectMovie(movie))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieListContainer));