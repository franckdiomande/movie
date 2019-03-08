import './aside-container.scss';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import FilterContainer from "../FilterContainer/FilterContainer.jsx";

export default class AsideContainer extends React.Component {
  render() {
    return (
        <div className={'_box'} id={'aside-container'}>
            <Switch>
                <Route exact path="/" component={FilterContainer} />
            </Switch>
        </div>
    )
  }
}