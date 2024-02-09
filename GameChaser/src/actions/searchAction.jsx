export const SET_SEARCH = 'SET_SEARCH';

export const setSearchAction = (game) => {
    return{
        type: SET_SEARCH,
        payload: game
    }
}
