const storage = window.localStorage;

const initialTeams = () => {
    const storageTeams = storage.getItem('teams');

    if (storageTeams) {
        return JSON.parse(storageTeams);
    }
    return {};
}

const initialState = initialTeams();

const teams = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case 'NEW_TEAM':
            newState = {
                ...state,
                [action.value]: 0
            };
            storage.setItem('teams', JSON.stringify(newState));
            return newState;
        case 'AWARD_POINTS':
            newState = {
                ...state,
                [action.name]: state[action.name] + action.value
            };
            storage.setItem('teams', JSON.stringify(newState));
            return newState;
        case 'REVOKE_POINTS':
            newState = {
                ...state,
                [action.name]: state[action.name] - action.value
            };
            storage.setItem('teams', JSON.stringify(newState));
            return newState;
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
            storage.removeItem('teams');
            return {};
        default:
            return state;
    }
}

export default teams;