import { FETCH_DATES } from "../actions/index";

export default function(state=[], action) {
   switch (action.type) {
       case FETCH_DATES:
            return action.payload.data;
   } 
   return state;
}