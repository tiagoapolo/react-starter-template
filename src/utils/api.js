// Modules
import axios from 'axios';

// Constants
import { BASE_URL } from 'utils/constants';

let instance = axios.create({});

class Api {
    static get(uri) {
        return instance.get(`${uri}`);
    }

    static post(uri, data) {
        return instance.post(`${uri}`, data);
    }

    static put(uri, data) {
        return instance.put(`${uri}`, data);
    }

    static patch(uri, data) {
        return instance.patch(`${uri}`, data);
    }

    static delete(uri) {
        return instance.delete(`${uri}`);
    }
}

let instancePublic = axios.create({});

instancePublic.interceptors.request.use(
    config => {
        // Don't IE request cache
        config.headers['Pragma'] = 'no-cache';
        config.headers['Access-Control-Allow-Origin'] = '*';

        return config;
    },
    error => Promise.reject(error),
);

class ApiPublic {
    static get(uri) {
        return instancePublic.get(`${BASE_URL}${uri}`);
    }

    static post(uri, data) {
        return instancePublic.post(`${BASE_URL}${uri}`, data);
    }

    static put(uri, data) {
        return instancePublic.put(`${BASE_URL}${uri}`, data);
    }

    static patch(uri, data) {
        return instancePublic.patch(`${BASE_URL}${uri}`, data);
    }

    static delete(uri) {
        return instancePublic.delete(`${BASE_URL}${uri}`);
    }
}

export { Api, ApiPublic };
