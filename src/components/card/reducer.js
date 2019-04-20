const INITIAL_STATE = {
    markedCard: -1,
    secMarkedCard: -1,
    valueCard: -1,
    secValueCard: -1,
    pairsFound: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MARKED_CARD':
            return { ...state, markedCard: action.payload, valueCard: action.valueCard }
        case 'SEC_MARKED_CARD':
            return { ...state, secMarkedCard: action.payload, secValueCard: action.valueCard }
        case 'RESETED_CARDS':
            return { ...state, markedCard: -1, valueCard: -1, secMarkedCard: -1, secValueCard: -1 }
        case 'PAIR_FOUND':
            return { ...state, pairsFound: [...state.pairsFound, action.payload], markedCard: -1, valueCard: -1, secMarkedCard: -1, secValueCard: -1}
        default:
            return state
    }
}