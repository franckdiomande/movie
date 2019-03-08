import React from 'react';
import {connect} from 'react-redux';
import { getMovies } from "../../redux/actions/getMoviesAction";
import './filter-container.scss';
import {withRouter} from "react-router";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import {setFilter} from "../../redux/actions/setFilterAction";
import {filterMovies, resetFilterMovies} from "../../redux/actions/filterMoviesAction";

const getFilterByType = (movies, type)=>{
    let genders = movies.map((movie)=>movie[type]);
    let result = [];
    genders.map((gender)=>{
        result = result.concat(gender);
    });
    return result;
};

class FilterContainer extends React.Component {

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { error, loading, genders, actors, directors } = this.props;
        
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <FilterComponent genders={genders} actors={actors} directors={directors}
                     setFilter={this.props.setFilter}
                     filters={this.props.filters}
                     filterMovies={this.props.filterMovies}
                     resetFilterMovies={this.props.resetFilterMovies}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.items,
        filters: state.filters,
        genders: getFilterByType(state.movies.items, 'genre'),
        actors: getFilterByType(state.movies.items, 'actors'),
        directors: getFilterByType(state.movies.items, 'directors'),
        loading: state.movies.loading,
        error: state.movies.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovies: ()=>dispatch(getMovies()),
        setFilter: (type, values)=>dispatch(setFilter(type, values)),
        filterMovies: (filters)=>dispatch(filterMovies(filters)),
        resetFilterMovies: ()=>dispatch(resetFilterMovies()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterContainer));