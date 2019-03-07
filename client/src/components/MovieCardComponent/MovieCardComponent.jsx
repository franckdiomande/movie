import './movie-card-component.scss';
import React from 'react';

export default class MovieCardComponent extends React.Component {
  render() {
    return (
        <div className={'movie-card-component'}>
            <div className={'poster'}>
                <img src="images/posters/captain-marvel.jpg" alt=''/>
            </div>
            <p className={'name'}>Captain Marvel</p>

            <div className={'footer'}>
                <span><i className="material-icons">remove_red_eye</i> 1200</span>
                <span><i className="material-icons">star</i> 5</span>
                <span><i className="material-icons">comment</i> 30</span>
                {/*<i className="material-icons">star_rate</i>*/}
            </div>

        </div>
    )
  }
}