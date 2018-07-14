const initialState = {
    selected: false,
    value: 0
}

const question = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_QUESTION':
            return {
                ...state,
                selected: !state.selected
            }
        case 'SET_QUESTION_VALUE':
            return {
                ...state,
                value: action.value
            }
        case 'AWARD_POINTS':
            return {
                selected: false,
                value: 0
            }
        default:
            return state;
    }
}

export default question;