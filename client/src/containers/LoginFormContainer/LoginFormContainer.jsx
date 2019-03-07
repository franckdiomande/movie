import './login-form-container.scss';
import React from 'react';
import LoginFormComponent from '../../components/LoginFormComponent/LoginFormComponent';

export default class LoginFormContainer extends React.Component {
  render() {
    return (
        <div id={'login-form-container'}>
            <LoginFormComponent />
        </div>
    )
  }
}