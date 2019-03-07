import React from 'react';

export default class ButtonComponent extends React.Component {
  render() {

    return <button className="_movie-button-active-widget _text-center" style={{textAlign: 'center'}}>{ this.props.text }</button>

  }
}