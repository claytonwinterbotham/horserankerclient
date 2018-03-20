import { combineReducers } from 'redux';
import TracksReducer from './reducer_tracks';
import ActiveTrack from './reducer_active_track';

const rootReducer = combineReducers({
  tracks: TracksReducer,
  activeTrack: ActiveTrack
});

export default rootReducer;
