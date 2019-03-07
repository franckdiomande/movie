import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {selectMovie} from "../../redux/actions";
import './movie-list-container.scss';
import MovieCardComponent from "../../components/MovieCardComponent/MovieCardComponent.jsx";

class MovieListContainer extends React.Component {
    render() {
        return (
            <div className={'_container _container-4'} id={'movie-list-container'}>
                {
                    this.props.movies.map((movie, key) => {
                        return (
                            <div className={'_box'} key={key}>
                                <MovieCardComponent movie={movie} key={key} onClick={()=>{selectMovie(movie)}}/>
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
    bindActionCreators({activeMovie: selectMovie}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);