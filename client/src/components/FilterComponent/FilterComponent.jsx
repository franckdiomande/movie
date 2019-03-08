import './filter-component.scss';
import React from 'react';
import Select from "../../widgets/Select/Select.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";

export default class FilterComponent extends React.Component {
    render() {
        return (
            <form id={'filter-component'}>
                <div className={'item'}>
                    <label>
                        <span>Genres</span>
                        <select name="gender" id={'select-gender-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            <option value="policier">Policier</option>
                            <option value="fiction">Fiction</option>
                        </select>
                    </label>
                </div>
                <div className={'item'}>
                    <label>
                        <span>Types</span>
                        <select name="type" id={'select-type-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            <option value="movie">Film</option>
                            <option value="show">Serie</option>
                        </select>
                    </label>
                </div>
                <div className={'item'}>
                    <label>
                        <span>Acteurs</span>
                        <select name="actor" id={'select-actor-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            <option value="movie">Acteur 1</option>
                            <option value="serie">Acteur 2</option>
                        </select>
                    </label>
                </div>
                <div className={'item'}>
                    <label>
                        <span>Réalisateurs</span>
                        <select name="actor" id={'select-director-filter'} style={{display: 'none'}} multiple={'multiple'}>
                            <option value="movie">Rea 1</option>
                            <option value="serie">Rea 2</option>
                        </select>
                    </label>
                </div>
                <p style={{textAlign: 'center', marginTop: '200px'}}>
                    <ButtonComponent text={'Filtrer'}/>
                </p>
                <p className={'reset-filter'}>
                    Réinitialiser les filtres
                </p>
            </form>
        )
    }

    componentDidMount() {

        let genderFilter = new Select('#select-gender-filter');
        genderFilter.container.style.zIndex = '1003';
        let typeFilter = new Select('#select-type-filter');
        typeFilter.container.style.zIndex = '1002';
        let actorFilter = new Select('#select-actor-filter');
        actorFilter.container.style.zIndex = '1001';
        let directorFilter = new Select('#select-director-filter');
        directorFilter.container.style.zIndex = '1000';

    }
}