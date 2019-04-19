import { combineReducers } from 'redux'

import Login from "../components/login/reducer"
import Card from "../components/card/reducer"

export default combineReducers({
  login: Login,
  card: Card
})