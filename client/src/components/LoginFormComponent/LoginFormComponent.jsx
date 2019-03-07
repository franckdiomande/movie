import "./login-form-component.scss";
import React from "react";
import Api from "../../Api";

export default class LoginFormComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            submitted: false,
            badCredential: false
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
        const { username, password } = this.state;
        if (username && password) {
            Api.login(username, password)
                .then(result => {
                    this.setState({ badCredential: false });
                    // TODO replace window.location
                    window.location.replace('/');
                })
                .catch(() => {
                    this.setState({ badCredential: true });
                });
        }
    }

    render() {
        const { username, password, submitted, badCredential } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                {badCredential && (
                    <div className="help-block">Bad credential</div>
                )}
                <form name="form" onSubmit={this.handleSubmit}>
                    <div
                        className={
                            "form-group" +
                            (submitted && !username ? " has-error" : "")
                        }
                    >
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                        {submitted && !username && (
                            <div className="help-block">
                                Username is required
                            </div>
                        )}
                    </div>
                    <div
                        className={
                            "form-group" +
                            (submitted && !password ? " has-error" : "")
                        }
                    >
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        {submitted && !password && (
                            <div className="help-block">
                                Password is required
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}
