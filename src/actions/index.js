import axios from 'axios';
export const FETCH_TRACKS = 'FETCH_TRACKS';
export const TRACK_SELECTED = 'TRACK_SELECTED';
export const ROOT_URL = 'http://localhost:57893/api/'

export function fetchTracks(){
    const param = 'trackdata'
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_TRACKS,
        payload: request
    }
}

export function selectTrack(track){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    return {
        type: TRACK_SELECTED,
        payload: track
    };
}