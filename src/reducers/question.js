const initialState = {
    selected: false
}

const question = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_QUESTION':
            return {
                selected: !state.selected
            }
        default:
            return state;
    }
}

export default question;