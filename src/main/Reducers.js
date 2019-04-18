import { combineReducers } from 'redux'

import Login from "../components/login/reducer"

export default combineReducers({
  login: Login
})