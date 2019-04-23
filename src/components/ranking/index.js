import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRanking } from './actions'

import RankingItem from '../rankingItem'

import './style.css'

class Ranking extends Component {

    componentDidMount() {
        this.props.addRanking(this.props.userName, this.props.rounds)
    }

    sortfunction(a, b){
        return (a.rounds - b.rounds)
    }

    render() {

        const rankingList = this.props.ranking.sort(this.sortfunction)

        return (
            <div className="ranking">
                <div className="ranking__header">
                    <span>Classificação dos jogadores:</span>
                </div>
                <ul className="ranking__list">
                    {rankingList.map( (item, index) => (
                        <RankingItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ranking: state.ranking.ranking,
    userName: state.login.userName,
    rounds: state.scoreboard.rounds,
    pairs: state.scoreboard.pairs
})

const mapDispatchToProps = dispatch => bindActionCreators({ addRanking }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)