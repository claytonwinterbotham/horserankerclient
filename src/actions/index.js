import axios from 'axios';
export const FETCH_TRACKS = 'FETCH_TRACKS';
export const FETCH_DATES = 'FETCH_DATES';
export const TRACK_SELECTED = 'TRACK_SELECTED';
export const DATE_SELECTED = 'DATE_SELECTED';
export const ROOT_URL = 'http://localhost:57893/api/'

export function fetchTracks(){
    const param = 'trackdata';
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
    return {
        type: FETCH_TRACKS,
        payload: request
    }
}

export function fetchDates(trackid){
    const param = `datedata/${trackid}`;
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
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

export function selectDate(trackid, date){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    const param = `racedata/${trackid}/${date}`;
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
    return {
        type: DATE_SELECTED,
        payload: request
    };
}