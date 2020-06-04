// Api
import publicApi from '../utils/publicApi';

export function login(email, password) {
    return publicApi.post(`/login`, { email, password });
}

export function register(name, email, password) {
    return publicApi.post(`/register`, { name, email, password });
}
