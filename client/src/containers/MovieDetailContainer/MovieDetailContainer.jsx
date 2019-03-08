import React from "react";
import { connect } from "react-redux";
import "./movie-details-container.scss";
import StarRatingComponent from "react-star-rating-component";
import Api from "../../Api";

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        const { rating, comment } = this.state;
        if (rating && comment) {
            const { activeMovie } = this.props;
            Api.postComment(activeMovie.slug, rating, comment)
                .then(() => {
                    activeMovie.rating.push({
                        rating: rating,
                        content: comment
                    });
                    let sum = 0;
                    activeMovie.rating.forEach(elem => {
                        sum += elem.rating;
                    });
                    activeMovie.average = sum / activeMovie.rating.length;
                    this.setState({ comment: "" });
                    this.setState({ submitted: false });
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
        const { activeMovie } = this.props;

        const { rating, comment, submitted, postError } = this.state;
        return (
            <div id={"movie-details-container"}>
                <div className={"_container _container-4 title"}>
                    <h1>{activeMovie ? activeMovie.name : "loading..."}</h1>
                    <p>
                        {new Date(activeMovie.release).toLocaleDateString()} -{" "}
                        {activeMovie.rated}
                    </p>
                </div>

                <div className={"_container _container-4"}>
                    <img
                        src={activeMovie ? activeMovie.poster : "loading..."}
                        alt=""
                    />
                    <div>
                        <h4>Rating</h4>
                        <div>
                            {activeMovie["average"] ? (
                                <StarRatingComponent
                                    name={"average"}
                                    starCount={10}
                                    value={activeMovie.average}
                                    editing={false}
                                />
                            ) : (
                                ""
                            )}
                            {activeMovie["average"]
                                ? " for " +
                                  activeMovie.rating.length +
                                  " reviews"
                                : "No Average for now"}
                        </div>
                        <h4>Summary</h4>
                        <p className={"summary"}>
                            {activeMovie ? activeMovie.summary : "loading..."}
                        </p>
                        <h4>Directors</h4>
                        <ul>
                            {activeMovie["directors"]
                                ? activeMovie.directors.map((director, i) => {
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
                            {activeMovie["writers"]
                                ? activeMovie.writers.map((writer, i) => {
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
                            {activeMovie["actors"]
                                ? activeMovie.actors.map((actor, i) => {
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
                            {activeMovie["rating"] &&
                            activeMovie["rating"].length > 0
                                ? activeMovie.rating.map((rating, i) => {
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

function mapStateToProps(state) {
    return {
        activeMovie: state.activeMovie.activeMovie
    };
}

export default connect(mapStateToProps)(MovieDetailContainer);
