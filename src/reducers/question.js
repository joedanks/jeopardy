import { data } from '../data/sampleGame';
import { newAnswers } from '../actions/question';

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
    board: initialBoard(initialAnswers()),
    selectedAnswer: JSON.parse(storage.getItem('answer'))
}

const question = (state = initialState, action) => {
    let newBoard,
        selectedAnswer;
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
            selectedAnswer = {
                x: action.x,
                y: action.y,
                value: action.value
            };
            storage.setItem('answer', JSON.stringify(selectedAnswer));
            return {
                ...state,
                selectedAnswer,
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
            storage.removeItem('board');
            storage.removeItem('answers');
            let newAnswers = initialAnswers();
            newBoard = initialBoard(newAnswers);
            storage.setItem('answers', JSON.stringify(newAnswers));
            storage.setItem('board', JSON.stringify(newBoard));
            return {
                data: newAnswers,
                board: newBoard,
            };
        default:
            return state;
    }
}

export default question;