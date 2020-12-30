export const RECEIVE_USERS = 'RECEIVE_USERS'

//action creator to return object to reducer

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}