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
                    // window.location.replace('/');
                    this.props.history.push('/')
                })
                .catch(() => {
                    this.setState({ badCredential: true });
                });
        }
    }

    render() {
        const { username, password, submitted, badCredential } = this.state;
        return (
            <div id={'login-form-component'}>
                <h2>Login</h2>
                {badCredential && (
                    <div className="help-block">Bad credential</div>
                )}
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={"form-group"}>

                        <div className="_movie-input-widget">
                            <label htmlFor="username" className="_movie-label">Username:</label>
                            <input
                                id={'username'}
                                type="text"
                                className="form-control _movie-input"
                                name="username"
                                value={username}
                                placeholder={'Enter username'}
                                onChange={this.handleChange}
                            />
                            {submitted && !username && (
                                <span className="_movie-input-error">Username is required</span>
                            )}
                        </div>

                    </div>

                    <div className={"form-group"}>

                        <div className="_movie-input-widget">
                            <label htmlFor="password" className="_movie-label">Password:</label>
                            <input
                                id={'password'}
                                type="text"
                                className="form-control _movie-input"
                                name="password"
                                value={password}
                                placeholder={'Enter password'}
                                onChange={this.handleChange}
                            />
                            {submitted && !password && (
                                <span className="_movie-input-error">Password is required</span>
                            )}

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
