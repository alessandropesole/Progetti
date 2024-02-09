import { DETAILS_FETCH_ACTION, GAME_FETCH_ACTION } from "../actions/fetchActions";
const initialState = {
    gameDetails: null,
    games:null
}

const fetchReducers = (state=initialState, action) => {
    switch(action.type) {
        case DETAILS_FETCH_ACTION :
            return {
                ...state,
                gameDetails: action.payload
            }
        case GAME_FETCH_ACTION : 
        return {
            ...state,
            game: action.payload
        }
            default : return state;
    }
}
export default fetchReducers