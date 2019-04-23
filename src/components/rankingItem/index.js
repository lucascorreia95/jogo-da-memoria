import React, { Component } from 'react';

export default class RankingItem extends Component {
    render() {
        return (
            <li className="ranking__item">
                <span className="ranking__name">{this.props.item.name}</span>
                <span className="ranking__rounds"> - {this.props.item.rounds} rodadas</span>
            </li>
        );
    }
}