import React from 'react';
import {connect} from 'react-redux';
import './movie-details-container.scss';

class MovieDetailContainer extends React.Component {

    render() {
        const {activeMovie} = this.props;
        return (
            <div className={'_container _container-4'} id={'movie-details-container'}>
                { activeMovie ? activeMovie.name : 'loading...' }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeMovie: state.activeMovie.activeMovie
    }
}

export default connect(mapStateToProps)(MovieDetailContainer);