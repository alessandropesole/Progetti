export const DETAILS_FETCH_ACTION = 'DETAILS_FETCH_ACTION';
export const GAME_FETCH_ACTION = 'GAME_FETCH_ACTION';

export const detailsFetch = (data) => {
    return{
    type: DETAILS_FETCH_ACTION,
    payload: data
}
}
export const gameFetch= (data) => {
    return{
        type:GAME_FETCH_ACTION,
        payload:data
    }
}