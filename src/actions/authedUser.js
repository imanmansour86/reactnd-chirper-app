export const SET_AUTHED_USER = 'SET_AUTHED_USER' //action type

//action creator 
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}