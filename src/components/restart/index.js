import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { restart } from './actions'

import './style.css'

class Restart extends Component {
    render() {
        return (
            <div className="restart">
                <Link to="/" onClick={() => this.props.restart()} className="restart__button">Jogar novamente!</Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ restart }, dispatch)

export default connect(null, mapDispatchToProps)(Restart)