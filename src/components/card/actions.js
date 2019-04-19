export const clickCard = (id, markedCard, valueCard) => {
    
    let typeAction = ""

    if (markedCard === -1) {
        typeAction = 'MARKED_CARD'
    } else {
        typeAction = 'SEC_MARKED_CARD'
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
            console.log("iguais")
        } else {
            typeAction = "RESETED_CARDS"
        }
    }

    return {
        type: typeAction
    }
}