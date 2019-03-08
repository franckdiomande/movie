import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.scss';
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import LoginFormContainer from "./containers/LoginFormContainer/LoginFormContainer";
import MovieDetailContainer from "./containers/MovieDetailContainer/MovieDetailContainer";
import Security from './Security.js';
import AddMovieContainer from "./containers/AddMovieContainer/AddMovieContainer";

export default class App extends React.Component {
    render() {
        return (
            <div id={'app'}>
                {
                    Security.isLogged() ? (
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route exact path="/details" component={MovieDetailContainer}/>
                            <Route exact path="/movies/add" component={AddMovieContainer}/>
                        </Switch>
                    ) : <LoginFormContainer/>
                }
            </div>
        )
    }
}
