import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import './add-movie-container.scss';
import HeaderContainer from "../HeaderContainer/HeaderContainer";

class AddMovieContainer extends React.Component {

    render() {

        return (
            <div>
                <HeaderContainer/>
                <div className={'_container _container-2 _no-wrap'} id={'add-movie-container'}>
                    <h1>Add movie container</h1>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}


export default withRouter(connect(mapStateToProps)(AddMovieContainer));