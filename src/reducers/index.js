import { combineReducers } from 'redux';
import TracksReducer from './reducer_tracks';
import DatesReducer from './reducer_dates';
import RacesReducer from './reducer_races';
import HorsesReducer from './reducer_horses';
import ActiveDate from './reducer_active_date';
import ActiveTrack from './reducer_active_track';
import ActiveRace from './reducer_active_race';
import ActiveHorse from './reducer_active_horse';


const rootReducer = combineReducers({
  tracks: TracksReducer,
  dates: DatesReducer,
  races: RacesReducer,
  horses: HorsesReducer,
  activeTrack: ActiveTrack,
  activeDate: ActiveDate,
  activeRace: ActiveRace,
  activeHorse: ActiveHorse
  
});

export default rootReducer;
