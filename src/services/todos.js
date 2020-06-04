// Api
import privateApi from '../utils/privateApi';

export function fetchTodos() {
    return privateApi.get(`/todos`);
}
