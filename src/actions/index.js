export function selectTrack(track){
    // selectTrack is an ActionCreator, it needs to return an action,
    //an object with a type property.
    return {
        type: 'TRACK_SELECTED',
        payload: track
    };
}