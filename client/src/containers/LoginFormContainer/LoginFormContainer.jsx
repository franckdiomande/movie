import './login-form-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import LoginFormComponent from '../../components/LoginFormComponent/LoginFormComponent';
import {getMovies} from "../../redux/actions/getMoviesAction";
import {selectMovie} from "../../redux/actions/selectMovieAction";

export class LoginFormContainer extends React.Component {
  render() {
      console.log('Login form container');
      console.log(this.props);
    return (
        <div id={'login-form-container'}>
            <LoginFormComponent history={this.props.history}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(LoginFormContainer));