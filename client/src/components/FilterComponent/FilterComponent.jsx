import './filter-component.scss';
import React from 'react';
import Select from "../../widgets/Select/Select.js";

export default class FilterComponent extends React.Component {

    render() {
        return (
            <form id={'filter-component'}>
                <div className={'item'}>
                    <label>
                        <span>Genres</span>
                        <select name="gender" id={'select-gender-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            {
                                this.props.genders.map((gender, key)=><option value={gender} key={key}>{gender}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div className={'item'}>
                    <label>
                        <span>Types</span>
                        <select name="type" id={'select-type-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            <option value="Film">Film</option>
                            <option value="Show">Show</option>
                        </select>
                    </label>
                </div>
                <div className={'item'}>
                    <label>
                        <span>Acteurs</span>
                        <select name="actor" id={'select-actor-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            {
                                this.props.actors.map((actor, key)=><option value={actor} key={key}>{actor}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div className={'item'}>
                    <label>
                        <span>Réalisateurs</span>
                        <select name="actor" id={'select-director-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            {
                                this.props.directors.map((director, key)=><option value={director} key={key}>{director}</option>)
                            }
                        </select>
                    </label>
                </div>
                <p style={{textAlign: 'center', marginTop: '200px'}}>
                    <button className="_movie-button-active-widget _text-center" style={{textAlign: 'center'}}
                            onClick={(e)=>{e.preventDefault(); this.props.filterMovies(this.props.filters)}}
                    >
                        Filtrer
                    </button>
                </p>
                <p className={'reset-filter'} onClick={this.props.resetFilterMovies}>
                    Réinitialiser les filtres
                </p>
            </form>
        )
    }

    componentDidMount() {

        let genderFilter = new Select('#select-gender-filter');
        genderFilter.container.style.zIndex = '1003';
        genderFilter.on('select', (context)=>{
            this.props.setFilter('genders', context.getSelected());
        });
        genderFilter.on('unselect', (context)=>{
            this.props.setFilter('genders', context.getSelected());
        });

        let typeFilter = new Select('#select-type-filter');
        typeFilter.container.style.zIndex = '1002';
        typeFilter.on('select', (context)=>{
            this.props.setFilter('types', context.getSelected());
        });
        typeFilter.on('unselect', (context)=>{
            this.props.setFilter('types', context.getSelected());
        });

        let actorFilter = new Select('#select-actor-filter');
        actorFilter.container.style.zIndex = '1001';
        actorFilter.on('select', (context)=>{
            this.props.setFilter('actors', context.getSelected());
        });
        actorFilter.on('unselect', (context)=>{
            this.props.setFilter('actors', context.getSelected());
        });

        let directorFilter = new Select('#select-director-filter');
        directorFilter.container.style.zIndex = '1000';
        directorFilter.on('select', (context)=>{
            this.props.setFilter('directors', context.getSelected());
        });
        directorFilter.on('unselect', (context)=>{
            this.props.setFilter('directors', context.getSelected());
        });

    }
}