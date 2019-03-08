import React from "react";
import { connect } from "react-redux";
import "./movie-detail-component.scss";
import StarRatingComponent from "react-star-rating-component";
import Api from "../../Api";

export default class MovieDetailComponent extends React.Component {
    constructor(props) {
        super(props);

        let { activeMovie } = this.props;

        if(activeMovie){
            localStorage.setItem('activeMovie', JSON.stringify(activeMovie));
        }

        activeMovie = JSON.parse(localStorage.getItem('activeMovie'))

        this.state = {
            movie: activeMovie,
            comment: "",
            submitted: false,
            rating: 1,
            postError: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { rating, comment, movie } = this.state;
        if (rating && comment) {
            Api.postComment(movie.slug, rating, comment)
                .then(() => {
                    movie.rating.push({
                        rating: rating,
                        content: comment
                    });
                    let sum = 0;
                    movie.rating.forEach(elem => {
                        sum += elem.rating;
                    });
                    movie.average = sum / movie.rating.length;
                    this.setState({ comment: "" });
                    this.setState({ submitted: false });
                    localStorage.setItem('activeMovie', JSON.stringify(movie));
                    this.forceUpdate();
                })
                .catch(() => {
                    this.setState({
                        postError:
                            "Server Error please retry or contact your admin"
                    });
                });
        }
    }

    render() {
        const { rating, comment, submitted, postError, movie } = this.state;
        return (
            <div id={"movie-detail-component"}>
                <div className={"_container _container-4 title"}>
                    <h1>{movie ? movie.name : "loading..."}</h1>
                    <p>
                        {new Date(movie.release).toLocaleDateString()} -{" "}
                        {movie.rated}
                    </p>
                </div>

                <div className={"_container _container-4"}>
                    <img
                        src={movie ? movie.poster : "loading..."}
                        alt=""
                    />
                    <div>
                        <h4>Rating</h4>
                        <div>
                            {movie["average"] ? (
                                <StarRatingComponent
                                    name={"average"}
                                    starCount={10}
                                    value={movie.average}
                                    editing={false}
                                />
                            ) : (
                                ""
                            )}
                            {movie["average"]
                                ? " for " +
                                movie.rating.length +
                                " reviews"
                                : "No Average for now"}
                        </div>
                        <h4>Summary</h4>
                        <p className={"summary"}>
                            {movie ? movie.summary : "loading..."}
                        </p>
                        <h4>Directors</h4>
                        <ul>
                            {movie["directors"]
                                ? movie.directors.map((director, i) => {
                                    return (
                                        <li
                                            className="pill"
                                            key={"director-" + i}
                                        >
                                            {director}
                                        </li>
                                    );
                                })
                                : "No directors"}
                        </ul>
                        <h4>Writers</h4>
                        <ul>
                            {movie["writers"]
                                ? movie.writers.map((writer, i) => {
                                    return (
                                        <li
                                            className="pill"
                                            key={"writer-" + i}
                                        >
                                            {writer}
                                        </li>
                                    );
                                })
                                : "No writers"}
                        </ul>
                        <h4>Actors</h4>
                        <ul>
                            {movie["actors"]
                                ? movie.actors.map((actor, i) => {
                                    return (
                                        <li
                                            className="pill"
                                            key={"actor-" + i}
                                        >
                                            {actor}
                                        </li>
                                    );
                                })
                                : "No actors"}
                        </ul>
                        <h4>Reviews</h4>
                        <ul>
                            {movie["rating"] &&
                            movie["rating"].length > 0
                                ? movie.rating.map((rating, i) => {
                                    return (
                                        <li
                                            className="reviewCard"
                                            key={"review-" + i}
                                        >
                                            <div>
                                                <StarRatingComponent
                                                    name={"review-" + i}
                                                    starCount={10}
                                                    value={rating.rating}
                                                    editing={false}
                                                />
                                            </div>
                                            <p>{rating.content}</p>
                                        </li>
                                    );
                                })
                                : "No reviews"}
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Review</h3>
                    <form onSubmit={this.handleSubmit}>
                        <StarRatingComponent
                            name="ratingMovie"
                            starCount={10}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />
                        {submitted && !comment && (
                            <div className="help-block">
                                Comment is required
                            </div>
                        )}
                        <textarea
                            cols="30"
                            rows="10"
                            className="commentArea"
                            name="comment"
                            value={comment}
                            onChange={this.handleChange}
                        />
                        {postError ? postError : ""}
                        <button className="submitComment">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
/*

function mapStateToProps(state) {
    return {
        activeMovie: state.activeMovie.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetailComponent);
*/
