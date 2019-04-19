import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../components/login'
import Main from '../components/main'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App