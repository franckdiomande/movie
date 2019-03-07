import './search-component.scss';
import React from 'react';

export default class SearchComponent extends React.Component {
  render() {
    return (
        <label className="_movie-search-widget" id={'search-component'}>
          <input type="text" className="_movie-input" placeholder="search movies"/>
            <i className="material-icons">search</i>
        </label>
    )
  }
}