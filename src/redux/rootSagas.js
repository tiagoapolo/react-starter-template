// Modules
import { all } from 'redux-saga/effects';

// Saga
import todosSaga from './todosReducer/saga';

function* rootSagas() {
    // here we initialize all the saga from different files
    yield all([todosSaga]);
}

export default rootSagas;
