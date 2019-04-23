const INITIAL_STATE = {
    ranking : []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RATING_ADDED':
            return { ...state, ranking: [ ...state.ranking, {name: action.payload, rounds: action.rounds}] }
        default:
            return state
    }
}