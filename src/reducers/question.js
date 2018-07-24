import { data } from '../data/sampleGame';

const storage = window.localStorage;

const initialAnswers = () => {
    const storageAnswers = storage.getItem('answers');

    if (storageAnswers) {
        return JSON.parse(storageAnswers);
    }
    return data;
}

const initialBoard = (answers) => {
    const storageBoard = storage.getItem('board');

    if (storageBoard) {
        return JSON.parse(storageBoard);
    }

    const board = answers.reduce((acc, column, i) => {
        acc[i] = column.answers.reduce((accum, val, j) => {
            accum[j] = 'NUMBER';
            return accum;
        }, {});
        return acc;
    }, {});

    return board;
}

const initialState = {
    data: initialAnswers(),
    board: initialBoard(initialAnswers())
}

const question = (state = initialState, action) => {
    let newBoard;
    switch (action.type) {
        case 'SELECT_ANSWER':
            newBoard = {
                ...state.board,
                [action.x]: {
                    ...state.board[action.x],
                    [action.y]: action.status
                }
            };
            storage.setItem('board', JSON.stringify(newBoard));
            return {
                ...state,
                selectedAnswer: {
                    x: action.x,
                    y: action.y,
                    value: action.value
                },
                board: newBoard
            };
        case 'AWARD_POINTS':
            newBoard = {
                ...state.board,
                [state.selectedAnswer.x]: {
                    ...state.board[state.selectedAnswer.x],
                    [state.selectedAnswer.y]: 'EMPTY'
                }
            };
            storage.setItem('board', JSON.stringify(newBoard));
            return {
                ...state,
                board: newBoard,
                selectedAnswer: undefined
            }
        case 'NEW_ANSWERS':
            storage.setItem('answers', JSON.stringify(action.data));
            newBoard = initialBoard(action.data);
            storage.setItem('board', JSON.stringify(newBoard));
            return {
                ...state,
                data: action.data,
                board: newBoard
            }
        case 'RESET':
            return {
                data: initialAnswers(),
                board: initialBoard(initialAnswers()),
            };
        default:
            return state;
    }
}

export default question;