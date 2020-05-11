/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import examplesReducer from './examples/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    examplesReducer: examplesReducer,
});

export default rootReducers;
