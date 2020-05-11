// Modules
import { all } from 'redux-saga/effects';

// Saga
import { examplesSaga } from './examples/saga';

function* rootSagas() {
    // here we initialize all the saga from different files
    yield all([...examplesSaga]);
}

export default rootSagas;
