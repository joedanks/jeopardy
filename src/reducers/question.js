import {data} from '../data/sampleGame';

const storage = window.localStorage;

const initialAnswers = () => {
    const storageAnswers = storage.getItem('answers');
    
    if (storageAnswers) {
        return JSON.parse(storageAnswers);
    }
    return data;
}

const initialState = {
    selected: false,
    value: 0,
    data: initialAnswers(),
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
            storage.setItem('answers', JSON.stringify(action.data));
            return {
                ...state,
                selected: false,
                value: 0,
                data: action.data,
                reset: true
            }
        case 'RESET':
            return {
                ...initialState,
                reset: true
            };
        default:
            return state;
    }
}

export default question;