import axios from 'axios';
export const FETCH_TRACKS = 'FETCH_TRACKS';
export const FETCH_DATES = 'FETCH_DATES';
export const TRACK_SELECTED = 'TRACK_SELECTED';
export const ROOT_URL = 'http://localhost:57893/api/'

export function fetchTracks(){
    const param = 'trackdata';
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
    console.log(" fetch track" + request);
    return {
        type: FETCH_TRACKS,
        payload: request
    }
}

export function fetchDates(trackid){
    const param = `datedata/${trackid}`;
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
    console.log("fetch dates url" + url)
    console.log(" fetch dates" + request);
    return {
        type: FETCH_DATES,
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