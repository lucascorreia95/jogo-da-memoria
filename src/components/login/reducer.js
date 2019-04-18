const INITIAL_STATE = {
    userName: "",
    inputValue: ""
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN_DONE':
            return { ...state, userName: action.payload }
        case 'HANDLE_INPUT_CHANGE':
            return { ...state, inputValue: action.payload }
        default:
            return state
    }
}