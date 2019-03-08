import './home-container.scss';
import React from 'react';
import AsideContainer from "../AsideContainer/AsideContainer";
import DisplayContainer from "../DisplayContainer/DisplayContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";

export default class HomeContainer extends React.Component {
  render() {
    return (
        <div>
            <HeaderContainer/>
            <div className={'_container _container-2 _no-wrap'} id={'content'}>
                <AsideContainer/>
                <DisplayContainer/>
            </div>
        </div>
    )
  }
}