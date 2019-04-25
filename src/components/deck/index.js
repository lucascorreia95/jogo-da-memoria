import React, { Component } from 'react'

import Card from '../card'

import './style.css'

class Deck extends Component {

  shuffleCards = () => {

    let deck = []

    for (let i = 0; i < 10; i++) {
      deck.push(<Card value={i} id={i+1} key={i} img={i+1} />) 
      deck.push(<Card value={i} id={i+11} key={i+11} img={i+1} />)
    }
    
    deck.sort(() => Math.random() - 0.5)

    return deck
  }

  render() {
    return (
      <div className="deck">
        {this.shuffleCards()}
      </div>
    )
  }
}

export default Deck