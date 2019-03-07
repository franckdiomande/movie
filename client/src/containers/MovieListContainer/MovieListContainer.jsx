import './movie-list-container.scss';
import React from 'react';
import MovieCardComponent from "../../components/MovieCardComponent/MovieCardComponent.jsx";

export default class MovieListContainer extends React.Component {
  render() {
    return (
        <div className={'_container _container-4'} id={'movie-list-container'}>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
            <div className={'_box'}>
                <MovieCardComponent/>
            </div>
        </div>
    )
  }
}