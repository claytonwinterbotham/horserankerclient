import axios from 'axios';
export const FETCH_TRACKS = 'FETCH_TRACKS';
export const FETCH_DATES = 'FETCH_DATES';
export const FETCH_RACES = 'FETCH_RACES';
export const FETCH_HORSES = 'FETCH_HORSES';
export const TRACK_SELECTED = 'TRACK_SELECTED';
export const DATE_SELECTED = 'DATE_SELECTED';
export const HORSE_SELECTED = 'HORSE_SELECTED';
export const RACE_SELECTED = 'RACE_SELECTED';
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

export function fetchRaces(trackid, date){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    const param = `racedata/${trackid}/${date}`;
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url);
    return {
        type: FETCH_RACES,
        payload: request
    };
}

export function fetchHorses(raceid, trackid, date, callback){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    const param = `horsedata/${raceid}${trackid}/${date}`;
    const url = `${ROOT_URL}${param}`;
    const request = axios.get(url)
    .then(() => callback)
    return {
        type: FETCH_HORSES,
        payload: request
    };
}

export function selectTrack(track){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    return {
        type: TRACK_SELECTED,
        payload: track
    };
}

export function selectDate(date){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    return {
        type: DATE_SELECTED,
        payload: date
    };
}

export function selectHorse(horse){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    return {
        type: HORSE_SELECTED,
        payload: horse
    };
}

export function selectRace(race){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    return {
        type: RACE_SELECTED,
        payload: race
    };
}
