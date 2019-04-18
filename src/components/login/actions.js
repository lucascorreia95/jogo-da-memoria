export const login = user => ({
    type: 'LOGIN_DONE',
    payload: user
})

export const handleInputChange = event => ({
    type: 'HANDLE_INPUT_CHANGE',
    payload: event.target.value
})