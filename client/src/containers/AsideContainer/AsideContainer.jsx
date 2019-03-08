import "./aside-container.scss";
import React from "react";
import FilterContainer from "../FilterContainer/FilterContainer";

export default class AsideContainer extends React.Component {
    render() {
        return (
            <div className={"_box"} id={"aside-container"}>
                <FilterContainer />
            </div>
        );
    }
}