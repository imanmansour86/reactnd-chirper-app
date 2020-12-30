import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets} from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'


export function handleInitialData() { //thunk action creator
    return(dispatch) => {
        return getInitialData() //get data from database
        .then(({ users, tweets }) => {
                dispatch(receiveTweets(tweets)) //add tweets and users to state of redux store
                dispatch(receiveUsers(users)) //dispatch actions to the store 
                dispatch(setAuthedUser(AUTHED_ID))
            } )

    }
}