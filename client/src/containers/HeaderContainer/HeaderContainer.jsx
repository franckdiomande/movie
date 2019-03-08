import "./header-container.scss";
import React from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent.jsx";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { LoginFormContainer } from "../LoginFormContainer/LoginFormContainer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <div id={"header-container"}>
                <img
                    src="../images/logo.svg"
                    alt="Movie app"
                    id={"logo"}
                    onClick={() => {
                        this.props.history.push("/");
                    }}
                />

                <img
                    src="../images/video-player.svg"
                    alt="Video player"
                    id={"add-movie"}
                    onClick={() => {
                        this.props.history.push("/movies/add");
                    }}
                />

                <img
                    src="../images/exit.png"
                    alt="Logout"
                    id={"logout"}
                    onClick={() => {
                        window.localStorage.removeItem("token");
                        this.props.history.push("/login");
                    }}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(HeaderContainer));
