import { FILTER } from "../actions/setFilterAction";

const setFilter = (state = {}, action)=>{
    switch (action.type) {
        case FILTER:
            /*return {
                ...state,
                filters: action.payload.filters
            };*/
            return Object.assign({}, state, {...action['payload']});
        default:
            return state
    }
};

export default setFilter;