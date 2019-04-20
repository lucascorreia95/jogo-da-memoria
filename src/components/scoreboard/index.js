import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

class Scoreboard extends Component {
    render() {
        return (
        <div className="scoreboard">
            <div className="scoreboard__user-name">
                <span>Boa sorte, { this.props.userName }!</span>
            </div>
            <div className="scoreboard__rounds">
                <span>Rodadas: { this.props.rounds }</span>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
  userName: state.login.userName,
  rounds: state.scoreboard.rounds
})

export default connect(mapStateToProps, null)(Scoreboard)