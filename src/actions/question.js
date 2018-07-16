export const toggleQuestionSelected = () => ({
    type: 'TOGGLE_QUESTION'
})

export const setQuestionValue = (value) => ({
    type: 'SET_QUESTION_VALUE',
    value
})

export const newAnswers = (data) => ({
    type: 'NEW_ANSWERS',
    data
})