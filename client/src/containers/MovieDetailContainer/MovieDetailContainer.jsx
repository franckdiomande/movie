import React from "react";
import { connect } from "react-redux";
import "./movie-details-container.scss";

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: "",
            comment: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        }
    }

    render() {
		const { activeMovie } = this.props;
		const { rating, comment, submitted } = this.state;
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
                        <p className={"summary"}>
                            {activeMovie ? activeMovie.summary : "loading..."}
                        </p>
                        <h4>Directors</h4>
                        <ul>
                            {activeMovie["directors"]
                                ? activeMovie.directors.map(director => {
                                      return (
                                          <li className="pill" key="{director}">
                                              {director}
                                          </li>
                                      );
                                  })
                                : "No directors"}
                        </ul>
                        <h4>Writers</h4>
                        <ul>
                            {activeMovie["writers"]
                                ? activeMovie.writers.map(writer => {
                                      return (
                                          <li className="pill" key="{writer}">
                                              {writer}
                                          </li>
                                      );
                                  })
                                : "No writers"}
                        </ul>
                        <h4>Actors</h4>
                        <ul>
                            {activeMovie["actors"]
                                ? activeMovie.actors.map(actor => {
                                      return (
                                          <li className="pill" key="{actor}">
                                              {actor}
                                          </li>
                                      );
                                  })
                                : "No actors"}
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Review</h3>
                    <form onSubmit={this.handleSubmit}>
                        <select
                            name=""
                            id=""
							className="rating"
                            value={rating}
                            onChange={this.handleChange}
                        >
                            <option value="0">0</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="2.5">2.5</option>
                            <option value="3">3</option>
                            <option value="3.5">3.5</option>
                            <option value="4">4</option>
                            <option value="4.5">4.5</option>
                            <option value="5">5</option>
                        </select>
                        {submitted && !comment && (
                            <div className="help-block">
                                Comment is required
                            </div>
                        )}
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="commentArea"
                            value={comment}
                            onChange={this.handleChange}
                        />
                    </form>
                    <button type="submit" className="submitComment">
                        Submit
                    </button>
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
