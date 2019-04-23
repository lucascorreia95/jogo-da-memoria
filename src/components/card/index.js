import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickCard, checkCards, lockScreen } from './actions'

import './style.css'

class Card extends Component {

  componentDidUpdate(){
    if( (this.props.markedCard !== -1) && (this.props.secMarkedCard !== -1) && 
      ((this.props.markedCard === this.props.id ) || (this.props.secMarkedCard === this.props.id)) ){
        
        this.props.lockScreen()

        setTimeout(() => {
          this.props.checkCards(this.props.valueCard, this.props.secValueCard)
        }, 2000)
        
    }
  }

  handleCard(){
    if (!this.props.blockedScreen){
      this.props.clickCard(this.props.id, this.props.markedCard, this.props.value) 
    }
  }

  render() {

    let classValue = ""

    if ( (this.props.markedCard === this.props.id) || (this.props.secMarkedCard === this.props.id) ) {
      classValue = "card__container card__container--active"
    } else {
      classValue = "card__container"
    }

    if( this.props.pairsFound.indexOf(this.props.value) !== -1 ){
      classValue = `${classValue} card__container--found`
    }

    return (
      <div className="card" onClick={ () => this.handleCard() } >
        <div className={classValue}>
          <figure className="card__front">
            <img src={this.props.img} alt="Card" />
          </figure>
          <div className="card__back"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  markedCard: state.card.markedCard,
  secMarkedCard: state.card.secMarkedCard,
  valueCard: state.card.valueCard,
  secValueCard: state.card.secValueCard,
  pairsFound: state.card.pairsFound,
  blockedScreen: state.card.blockedScreen
})

const mapDispatchToProps = dispatch => bindActionCreators({ clickCard, checkCards, lockScreen }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Card)