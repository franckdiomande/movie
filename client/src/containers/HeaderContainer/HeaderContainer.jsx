import './header-container.scss';
import React from 'react';
import SearchComponent from "../../components/SearchComponent/SearchComponent.jsx";

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <div id={'header-container'}>

        <img src="../images/logo.svg" alt="Movie app" id={'logo'}/>

        <SearchComponent/>

        <img src="../images/user.png" alt="Movie app" id={'profile'}/>

      </div>
    )
  }
}