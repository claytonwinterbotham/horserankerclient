import axios from 'axios';
export * from './alert.actions';
export * from './user.actions';
export * from './data.actions';

// export const FETCH_RACES = 'FETCH_RACES';
// export const FETCH_HORSES = 'FETCH_HORSES';
// export const FETCH_HORSE_DETAIL = 'FETCH_HORSE_DETAIL';
// export const DATE_SELECTED = 'DATE_SELECTED';
// export const HORSE_SELECTED = 'HORSE_SELECTED';
// export const RACE_SELECTED = 'RACE_SELECTED';
// export const ROOT_URL = 'http://localhost:57893/api/'

// export const dataActions = {
//     fetchTracks,
//     fetchDates,
//     fetchRaces,
//     fetchHorses,
//     fetchHorseDetail,
//     selectTrack,
//     selectDate,
//     selectRace,
//     selectHorse
// };


// export function fetchRaces(trackid, date){
//     // selectTrack is an ActionCreator, it needs to return an action,
//     //an object with a type property.
//     const param = `racedata/${trackid}/${date}`;
//     const url = `${ROOT_URL}${param}`;
//     const request = axios.get(url);
//     return (dispatch) => {
//         request.then(({data}) => {
//             dispatch({ 
//                 type: FETCH_RACES,
//                 payload: request
//             })
//         });
//     };   
// }

// export function fetchHorses(raceid, trackid, date){
//     // selectTrack is an ActionCreator, it needs to return an action,
//     //an object with a type property.
//     const param = `horsedata/${raceid}/${trackid}/${date}`;
//     const url = `${ROOT_URL}${param}`;
//     const request = axios.get(url)
//     return (dispatch) => {
//         request.then(({data}) => {
//             dispatch({ 
//                 type: FETCH_HORSES,
//                 payload: request
//             })
//         });
//     };   
// }

// export function fetchHorseDetail(raceid, horseid){
//     // selectTrack is an ActionCreator, it needs to return an action,
//     //an object with a type property.
//     const param = `horsedata/${raceid}/${horseid}`;
//     const url = `${ROOT_URL}${param}`;
//     const request = axios.get(url)
//     return (dispatch) => {
//         request.then(({data}) => {
//             dispatch({ 
//                 type: FETCH_HORSE_DETAIL,
//                 payload: request
//             })
//         });
//     };   
// }

// export function selectTrack(track){
//     // selectTrack is an ActionCreator, it needs to return an action,
//     //an object with a type property.
//     return {
//         type: TRACK_SELECTED,
//         payload: track
//     };
// }


// export function selectHorse(horse, callback){
//     // selectTrack is an ActionCreator, it needs to return an action,
//     //an object with a type property.
//     callback()
//     return {
//         type: HORSE_SELECTED,
//         payload: horse
//     };
// }

// export function selectRace(race, callback){
//     // selectTrack is an ActionCreator, it needs to return an action,
//     //an object with a type property.
//     callback()
//     return {
//         type: RACE_SELECTED,
//         payload: race
//     };
// }
