/* Modules */
import { put, takeEvery } from 'redux-saga/effects';

// Services
// import { Service } from 'services';

/* Types */
import { EXAMPLE_ACTION } from './types';

function* exampleAction(action) {
    try {
        //const response = yield call('Service.serviceName', action.id);
        const response = { status: 200 };

        if (response.status === 200) {
            yield put({ type: EXAMPLE_ACTION.SUCCESS, data: action.data, message: null });
        }
    } catch (e) {
        yield put({ type: EXAMPLE_ACTION.FAILURE, data: [], message: e.response.error });
    }
}

export const examplesSaga = [takeEvery(EXAMPLE_ACTION.REQUEST, exampleAction)];
