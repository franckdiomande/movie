import './display-container.scss';
import React from 'react';
import MovieListContainer from "../MovieListContainer/MovieListContainer.jsx";

export default class DisplayContainer extends React.Component {
  render() {
    return (
        <div className={'_box'} id={'display-container'}>
            <MovieListContainer/>
        </div>
    )
  }
}