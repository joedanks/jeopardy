const storage = window.localStorage;

const initialState = {}

const teams = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_TEAM':
            return {
                ...state,
                [action.value]: 0
            }
        case 'AWARD_POINTS':
            return {
                ...state,
                [action.name]: state[action.name] + action.value
            }
        case 'NEW_ANSWERS':
            return Object.keys(state)
                .reduce(
                    (acc, val) => ({
                        ...acc,
                        [val]: 0
                    }),
                    {}
                );
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default teams;