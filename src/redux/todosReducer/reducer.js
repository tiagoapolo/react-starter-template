// Types
export const Types = {
    REQUEST: 'todos/REQUEST',
    SUCCESS: 'todos/SUCCESS',
    FAILURE: 'todos/FAILURE',
    RESET: 'todos/RESET',
};

const INITIAL_STATE = {
    todos: [],
    isLoading: false,
    error: null,
};

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case Types.SUCCESS:
            return {
                ...state,
                todos: [].concat(action.payload || []),
                isLoading: false,
                error: null,
            };

        case Types.FAILURE:
            return {
                ...state,
                error: null,
                isLoading: false,
            };

        case Types.RESET:
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

export function fetchTodos() {
    return {
        type: Types.REQUEST,
    };
}
