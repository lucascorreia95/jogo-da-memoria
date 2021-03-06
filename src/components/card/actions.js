export const clickCard = (id, markedCard, valueCard) => {
    
    let typeAction = "nothing"

    if (id !== markedCard) {
        if (markedCard === -1) {
            typeAction = "MARKED_CARD"
        } else {
            typeAction = "SEC_MARKED_CARD"
        }
    }

    return{
        type: typeAction,
        payload: id,
        valueCard
    }
}

export const checkCards = (value, secValue) => {

    let typeAction = ""

    if ( (value !== -1) && (secValue !== -1) ) {
        if (value === secValue) {
            typeAction = "PAIR_FOUND"
        } else {
            typeAction = "RESETED_CARDS"
        }
    }

    return {
        type: typeAction,
        payload: value
    }
}

export const lockScreen = () => ({type: "BLOCKED_SCREEN"})