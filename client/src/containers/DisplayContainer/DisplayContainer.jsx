import './display-container.scss';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import MovieListContainer from "../MovieListContainer/MovieListContainer.jsx";
import LoginFormContainer from "../LoginFormContainer/LoginFormContainer.jsx";
import MovieDetailContainer from "../MovieDetailContainer/MovieDetailContainer.jsx";

export default class DisplayContainer extends React.Component {
  render() {
    return (
        <div className={'_box'} id={'display-container'}>
            <Switch>
                <Route exact path="/" component={MovieListContainer} />
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/details" component={MovieDetailContainer} />
            </Switch>
        </div>
    )
  }
}