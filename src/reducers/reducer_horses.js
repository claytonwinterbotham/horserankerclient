import { FETCH_HORSES } from "../actions/index";
import _ from "lodash";
//state argument is not application state, only the state this reducer is reponsible for

export default function(state = null, action) {
    switch(action.type){
    case FETCH_HORSES:
    return action.payload.data
    default:  
        return state
    }
}