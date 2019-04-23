import { combineReducers } from 'redux'

import Login from '../components/login/reducer'
import Card from '../components/card/reducer'
import Scoreboard from '../components/scoreboard/reducer'
import Ranking from '../components/ranking/reducer'

export default combineReducers({
  login: Login,
  card: Card,
  scoreboard: Scoreboard,
  ranking: Ranking
})