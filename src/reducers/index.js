import { combineReducers } from 'redux';
import TracksReducer from './reducer_tracks';
import DatesReducer from './reducer_dates';
import RacesReducer from './reducer_races';
import ActiveDate from './reducer_active_date';
import ActiveTrack from './reducer_active_track';

const rootReducer = combineReducers({
  tracks: TracksReducer,
  dates: DatesReducer,
  races: RacesReducer,
  activeTrack: ActiveTrack,
  activeDate: ActiveDate
  
});

export default rootReducer;
