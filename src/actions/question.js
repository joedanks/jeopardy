export const selectAnswer = (status, x, y, value) => ({
    type: 'SELECT_ANSWER',
    status,
    x,
    y,
    value
})

export const newAnswers = (data) => ({
    type: 'NEW_ANSWERS',
    data
})

export const reset = () => ({
    type: 'RESET'
})