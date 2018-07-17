import {data} from '../data/sampleGame';

const initialState = {
    selected: false,
    value: 0,
    data,
    reset: false
}

const question = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_QUESTION':
            return {
                ...state,
                selected: !state.selected,
                reset: false
            }
        case 'SET_QUESTION_VALUE':
            return {
                ...state,
                value: action.value,
                reset: false
            }
        case 'AWARD_POINTS':
            return {
                ...state,
                selected: false,
                value: 0,
                reset: false
            }
        case 'NEW_ANSWERS':
            return {
                ...state,
                selected: false,
                value: 0,
                data: action.data,
                reset: true
            }
        default:
            return state;
    }
}

export default question;