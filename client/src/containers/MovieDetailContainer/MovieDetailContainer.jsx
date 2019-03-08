import React from "react";
import { connect } from "react-redux";
import "./movie-detail-container.scss";
import MovieDetailComponent from "../../components/MovieDetailComponent/MovieDetailComponent";
import HeaderContainer from "../HeaderContainer/HeaderContainer";

class MovieDetailContainer extends React.Component {

    render() {
        return (
            <div>
                <HeaderContainer/>
                <MovieDetailComponent activeMovie={this.props.activeMovie}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeMovie: state.activeMovie.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetailContainer);
