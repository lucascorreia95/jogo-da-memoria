import React, { Component } from 'react'

import Scoreboard from '../scoreboard'
import Deck from '../deck'
import EndGame from '../endgame'

import Logo from '../../assets/jogo-da-memoria.png'

import './style.css'

class Main extends Component {
    
    render() {
        return (
        <div className="main">
            <div className="main__container">
                <div className="main__header">
                    <div className="main__logo">
                        <figure className="main__img">
                            <img src={Logo} alt="Jogo da memória" />
                        </figure>
                    </div>
                    <Scoreboard />
                </div>
                <div className="main__deck">
                    <Deck />
                </div>
                <div className="main__end-game">
                    <EndGame />
                </div>
            </div>
        </div>
        )
    }
}

export default Main