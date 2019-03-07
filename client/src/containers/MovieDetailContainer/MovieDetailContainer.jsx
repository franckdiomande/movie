import React from "react";
import { connect } from "react-redux";
import "./movie-details-container.scss";

class MovieDetailContainer extends React.Component {
    render() {
        const { activeMovie } = this.props;
        return (
            <div id={"movie-details-container"}>
                <div className={"_container _container-4 title"}>
                    <h1>{activeMovie ? activeMovie.name : "loading..."}</h1>
                    <p>{new Date(activeMovie.release).toLocaleDateString()}</p>
                    <p>{activeMovie.rated}</p>
                </div>
                
                <div className={"_container _container-4"}>
                    <img
                        src={activeMovie ? activeMovie.poster : "loading..."}
                        alt=""
                    />
                    <div>
                        <p className={"summary"}>
                            {activeMovie ? activeMovie.summary : "loading..."}
                        </p>
                        <h4>Directors</h4>
                        <ul>
                            {activeMovie.directors.map((director) => {
                                return (
                                    <li className={"pill"}>{director}</li>
                                );
                            })}
                        </ul>
                        <h4>Writers</h4>
                        <ul>
                            {activeMovie.writers.map((writer) => {
                                return (
                                    <li className={"pill"}>{writer}</li>
                                );
                            })}
                        </ul>
                        <h4>Actors</h4>
                        <ul>
                            {activeMovie.actors.map((actor) => {
                                return (
                                    <li className={"pill"}>{actor}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
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
