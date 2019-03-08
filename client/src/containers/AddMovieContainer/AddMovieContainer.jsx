import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import './add-movie-container.scss';
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import AddMovieFormComponent from "../../components/AddMovieFormComponent/AddMovieFormComponent";

class AddMovieContainer extends React.Component {

    render() {

        return (
            <div>
                <HeaderContainer/>
                <div className={'_container _container-2 _no-wrap'} id={'add-movie-container'}>
                    <AddMovieFormComponent/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}


export default withRouter(connect(mapStateToProps)(AddMovieContainer));