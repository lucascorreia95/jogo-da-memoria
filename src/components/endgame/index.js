import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'

class EndGame extends Component {
    render() {

        let classValue = "end-game"

        if (this.props.pairs === 0){
            classValue = `${classValue} end-game--active`
        }

        return (
            <div className={classValue}>
                <div className="end-game__wrapper">
                    <div className="end-game__msg">
                        <span>Parabens { this.props.userName }, voce terminou o jogo em { this.props.rounds } rodadas.</span>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
  rounds: state.scoreboard.rounds,
  userName: state.login.userName,
  pairs: state.scoreboard.pairs
})

export default connect(mapStateToProps, null)(EndGame)