import './header-container.scss';
import React from 'react';
import SearchComponent from "../../components/SearchComponent/SearchComponent.jsx";
import { Route, Switch } from "react-router-dom";

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <div id={'header-container'}>

        <img src="../images/logo.svg" alt="Movie app" id={'logo'}/>

          <Switch>
              <Route exact path="/" component={SearchComponent} />
          </Switch>

        <img src="../images/user.png" alt="Movie app" id={'profile'}/>

      </div>
    )
  }
}