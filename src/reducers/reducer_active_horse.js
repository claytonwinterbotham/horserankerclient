import { HORSE_SELECTED } from "../actions/index";
//state argument is not application state, only the state this reducer is reponsible for

export default function(state = null, action) {
    switch(action.type){
    case HORSE_SELECTED:
        return action.payload;
    }
    return state
}