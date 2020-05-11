// Budget Reducer
// Here must have all data referent to budget page

// Types
import { EXAMPLE_ACTION } from './types';

const INITIAL_STATE = {
    example: {
        data: {},
        isLoading: false,
        message: null,
    },
};

const examplesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION.REQUEST:
            return {
                ...state,
                example: {
                    data: {},
                    isLoading: false,
                    message: null,
                },
            };

        case EXAMPLE_ACTION.SUCCESS:
            return {
                ...state,
                example: {
                    data: {},
                    isLoading: false,
                    message: 'Success',
                },
            };

        case EXAMPLE_ACTION.FAILURE:
            return {
                ...state,
                example: {
                    data: {},
                    isLoading: false,
                    message: 'Failure',
                },
            };

        default:
            return state;
    }
};

export default examplesReducer;
