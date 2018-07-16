import {data} from '../data/sampleGame';

const initialState = {
    selected: false,
    value: 0,
    data
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
        case 'NEW_ANSWERS':
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export default question;