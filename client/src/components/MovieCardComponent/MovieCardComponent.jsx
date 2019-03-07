import './movie-card-component.scss';
import React from 'react';

export default class MovieCardComponent extends React.PureComponent {
  render() {
    return (
        <div className={'movie-card-component'} onClick={()=>{this.props.onClick(this.props.movie)}}>
            <div className={'poster'}>
                <img src={this.props.movie.poster} alt=''/>
            </div>
            <p className={'name'}>{this.props.movie.name}</p>

            <div className={'footer'}>
                <span><i className="material-icons">remove_red_eye</i> 1200</span>
                <span><i className="material-icons">star</i> 5</span>
                <span><i className="material-icons">comment</i> 30</span>
            </div>

        </div>
    )
  }
}