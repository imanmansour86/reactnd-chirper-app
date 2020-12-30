import { combineReducers } from 'redux'
import tweets from './tweets'
import users from './users'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'
export default combineReducers({ //combine reducers because createStore function only accepts a single reducer.
    tweets,
    users,
    authedUser,
    loadingBar: loadingBarReducer
})

//initialized each slice of the store by setting a default state value as the first parameter inside each reducer function.
//store now has:
//tweets : {}
//users: {}
//authedUsers: null (from authedUsers default state)