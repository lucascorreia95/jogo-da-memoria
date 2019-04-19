import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Deck from '../deck'

import './style.css'

class Main extends Component {
    
    render() {
        return (
        <div className="main">
            <div className="main__container">
                <div className="main__header">
                    <h1 className="main__name">Bem-vindo {this.props.userName}</h1>
                </div>
                <div className="main__deck">
                    <Deck />
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
  userName: state.login.userName,
})

export default connect(mapStateToProps, null)(Main)