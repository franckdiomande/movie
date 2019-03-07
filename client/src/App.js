import React from 'react';
import './App.scss';
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer.jsx";
import AsideContainer from "./containers/AsideContainer/AsideContainer.jsx";
import DisplayContainer from "./containers/DisplayContainer/DisplayContainer.jsx";

export default class App extends React.Component {
  render() {
    return (
        <div id={'app'}>
          <HeaderContainer/>
          <div className={'_container _container-2 _no-wrap'} id={'content'}>
            <AsideContainer/>
            <DisplayContainer/>
          </div>
        </div>
    )
  }
}
