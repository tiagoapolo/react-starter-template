/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import todosReducer from './todosReducer/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    todosReducer: todosReducer,
});

export default rootReducers;
