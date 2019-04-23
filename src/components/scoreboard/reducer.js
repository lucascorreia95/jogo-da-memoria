const INITIAL_STATE = {
    rounds: 0,
    pairs: 10
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SEC_MARKED_CARD':
            return { ...state, rounds: state.rounds + 1 }
        case 'PAIR_FOUND':
            return { ...state, pairs: state.pairs - 1 }
        case 'GAME_RESTARTED':
            return { ...INITIAL_STATE }
        default:
            return state
    }
}