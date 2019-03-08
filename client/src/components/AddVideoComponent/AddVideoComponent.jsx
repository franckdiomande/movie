import React from 'react';

export default class AddVideoComponent extends React.Component {
  render() {

    return <img src="../images/video-player.svg" alt="Video player" id={'add-movie'} onClick={()=>{this.props.history.push('/movies/add')}}/>

  }
}