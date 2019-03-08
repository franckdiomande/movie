import './register-form-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import RegisterFormComponent from '../../components/RegisterFormComponent/RegisterFormComponent';

export class RegisterFormContainer extends React.Component {
  render() {
      console.log('Register form container');
      console.log(this.props);
    return (
        <div id={'register-form-container'}>
            <RegisterFormComponent history={this.props.history}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(RegisterFormContainer));