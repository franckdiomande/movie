import "./add-movie-form-component.scss";
import React from "react";
import Api from "../../Api";

export default class AddMovieFormComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            submitted: false,
            badCredential: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id={'add-movie-form-component'}>
                <h2>New Movie</h2>

                <form>

                    <div className={"form-group"}>

                        <div className="_movie-input-widget">
                            <label htmlFor="username" className="_movie-label">Name:</label>
                            <input
                                type="text"
                                id={'name'}
                                className="_movie-input"
                                name="name"
                                placeholder={'Enter name'}
                                onChange={this.handleChange}
                            />
                            <span className="_movie-input-error">Name is required</span>

                        </div>

                    </div>


                    <div className="form-group" style={{textAlign: 'right'}}>
                        <button className="_movie-button-active-widget _text-center" style={{textAlign: 'center'}}
                        >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}
