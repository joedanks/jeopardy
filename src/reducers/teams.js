const initialState = {
    'Awesome': 0,
    'Two': 0
}

const teams = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_TEAM':
            return {
                ...state,
                [action.name]: 0
            }
        case 'AWARD_POINTS':
            return {
                ...state,
                [action.name]: state[action.name] + action.value
            }
        default:
            return state;
    }
}

export default teams;