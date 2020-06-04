// Types
import { TODOS } from './types';

const INITIAL_STATE = {
    todos: [],
    isLoading: false,
    error: null,
};

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODOS.REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case TODOS.SUCCESS:
            return {
                ...state,
                todos: [].concat(action.payload || []),
                isLoading: false,
                error: null,
            };

        case TODOS.FAILURE:
            return {
                ...state,
                error: null,
                isLoading: false,
            };

        case TODOS.RESET:
            return {
                ...state,
                error: null,
                isLoading: false,
                todos: [],
            };

        default:
            return state;
    }
};

export default todosReducer;
