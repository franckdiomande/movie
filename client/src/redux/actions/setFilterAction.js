export const FILTER = 'FILTER';

export function setFilter(type, values){

    return {
        type: FILTER,
        payload: {
            [type]: values
        }
    }

}