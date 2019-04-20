import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from './main/Reducers'

import App from './main/Routes'

import './index.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
    
const store = applyMiddleware(thunk, promise)(createStore)(rootReducer, devTools)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))