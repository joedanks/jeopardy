import { combineReducers } from 'redux';
import question from './question';
import teams from './teams';

export default combineReducers({
    question,
    teams
})