import { combineReducers } from 'redux';
import TracksReducer from './reducer_tracks';
import DatesReducer from './reducer_dates';
import ActiveTrack from './reducer_active_track';

const rootReducer = combineReducers({
  tracks: TracksReducer,
  dates: DatesReducer,
  activeTrack: ActiveTrack
});

export default rootReducer;
