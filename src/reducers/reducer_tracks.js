import { FETCH_TRACKS } from "../actions/index";
import _ from "lodash";

export default function(state={}, action) {
   switch (action.type) {
    case FETCH_TRACKS:
        return _.mapKeys(action.payload.data, 'trackid');
    default:  
        return state
    }
}
