import React, { Component } from 'react'

import Card from '../card'

import Card1 from '../../assets/deck/airplane.svg'
import Card2 from '../../assets/deck/bicycle.svg'
import Card3 from '../../assets/deck/bus-1.svg'
import Card4 from '../../assets/deck/bus.svg'
import Card5 from '../../assets/deck/car.svg'
import Card6 from '../../assets/deck/crane.svg'
import Card7 from '../../assets/deck/delivery-truck.svg'
import Card8 from '../../assets/deck/hot-air-balloon.svg'
import Card9 from '../../assets/deck/train.svg'
import Card10 from '../../assets/deck/truck.svg'

import './style.css'

class Deck extends Component {

  shuffleCards = () => {

    let deck = []

    for (let i = 0; i < 10; i++) {
      if (i===0){
        deck.push(<Card value={i} id={i+1} key={i} img={ Card1 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card1 } />)
      } else if (i===1) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card2 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card2 } />)
      } else if (i===2) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card3 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card3 } />)
      } else if (i===3) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card4 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card4 } />)
      } else if (i===4) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card5 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card5 } />)
      } else if (i===5) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card6 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card6 } />)
      } else if (i===6) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card7 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card7 } />)
      } else if (i===7) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card8 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card8 } />)
      } else if (i===8) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card9 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card9 } />)
      } else if (i===9) {
        deck.push(<Card value={i} id={i+1} key={i} img={ Card10 } />) 
        deck.push(<Card value={i} id={i+11} key={i+11} img={ Card10 } />)
      }
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