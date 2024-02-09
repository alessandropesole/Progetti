export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (item) => {
    return {
        type: ADD_FAVORITE,
        payload:item
    }
}

export const removeFavorite = (item) =>  {
    return {
        type: REMOVE_FAVORITE,
        payload:item
    }
}