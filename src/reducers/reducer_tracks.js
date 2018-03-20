import { FETCH_TRACKS } from "../actions/index";

export default function(state=[], action) {
   switch (action.type) {
       case FETCH_TRACKS:
            return action.payload.data;
   } 
   return state;
}