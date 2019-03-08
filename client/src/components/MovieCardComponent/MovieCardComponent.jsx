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
                <span><i className="material-icons">star</i>{this.props.movie.average.toFixed(2)}</span>
                <span><i className="material-icons">comment</i> {this.props.movie.rating.length}</span>
            </div>

        </div>
    )
  }
}