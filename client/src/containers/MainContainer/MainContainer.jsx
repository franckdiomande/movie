import './main-container.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "../HeaderContainer/HeaderContainer.jsx";
import DisplayContainer from "../DisplayContainer/DisplayContainer.jsx";
import AsideContainer from "../AsideContainer/AsideContainer.jsx";

class MainContainer extends React.Component {
  render() {
    return (
      <div id={'main-container'}>
        <HeaderContainer/>
        <div className={'_container _container-2 _no-wrap'} id={'content'}>
          <AsideContainer/>
          <DisplayContainer/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <Router>
        <MainContainer />
    </Router>,
  document.querySelector('#root')
);
