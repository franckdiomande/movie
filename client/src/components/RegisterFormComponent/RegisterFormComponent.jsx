import "./register-form-component.scss";
import React from "react";
import Api from "../../Api";

export default class RegisterFormComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "",
            submitted: false,
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
        const { username, password, email } = this.state;
        if (username && password && email) {
            Api.register(username, password, email)
                .then(result => {
                    this.props.history.push('/login')
                })
        }
    }

    render() {
        const { username, password, email, submitted } = this.state;
        return (
            <div id={'register-form-component'}>
                <h2>Register</h2>

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
                                type="password"
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

                    <div className={"form-group"}>
                        <div className="_movie-input-widget">
                            <label htmlFor="password" className="_movie-label">Email:</label>
                            <input
                                id={'email'}
                                type="email"
                                className="form-control _movie-input"
                                name="email"
                                value={email}
                                placeholder={'Enter email'}
                                onChange={this.handleChange}
                            />
                            {submitted && !email && (
                                <span className="_movie-input-error">email is required</span>
                            )}
                        </div>
                    </div>


                    <div className="form-group" style={{textAlign: 'right'}}>
                        <button className="_movie-button-active-widget _text-center" style={{textAlign: 'center'}}
                        >
                            Register
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}
