import "./aside-container.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import FilterComponent from "../../components/FilterComponent/FilterComponent.jsx";

export default class AsideContainer extends React.Component {
    render() {
        return (
            <div className={"_box"} id={"aside-container"}>
                <Switch>
                    <Route exact path="/" component={FilterComponent} />
                </Switch>
            </div>
        );
    }
}