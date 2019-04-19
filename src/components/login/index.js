import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, handleInputChange } from './actions'

import './style.css'
import Logo from '../../assets/jogo-da-memoria.png'

class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.props.inputValue)
    this.props.history.push('/main')
  }

  render() {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit}>
          <figure className="login__image">
            <img src={Logo} alt="Jogo da memória" />
          </figure>
          <input
            className="login__input"
            placeholder="Digite seu nome!"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button className="login__button" type="submit">Iniciar</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inputValue: state.login.inputValue,
})

const mapDispatchToProps = dispatch => bindActionCreators({ login, handleInputChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)